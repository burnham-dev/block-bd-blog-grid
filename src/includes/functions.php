<?php 

/* --------------------------------------------------------------- */
/* -------------------- GET TEMPLATE PART ------------------------ */
/* --------------------------------------------------------------- */

define('PLUGIN_DIR_PATH', plugin_dir_path( __DIR__ ));

function bd_get_template_part($slug, $name = null, $args = array()) {

 do_action("bd_get_template_part_{$slug}", $slug, $name, $args);

 $templates = array();
 if (isset($name))
	 $templates[] = "{$slug}-{$name}.php";

 $templates[] = "{$slug}.php";

 bd_get_template_path($templates, true, false, $args);
}

function bd_get_template_path($template_names, $load = false, $require_once = true, $args = array() ) {
   $located = ''; 
   foreach ( (array) $template_names as $template_name ) { 
	 if ( !$template_name ) 
	   continue; 

	 /* search file within the PLUGIN_DIR_PATH only */ 
	 if ( file_exists(PLUGIN_DIR_PATH . $template_name)) { 
	   $located = PLUGIN_DIR_PATH . $template_name; 
	   break; 
	 } 
   }

   if ( $load && '' != $located )
	   load_template( $located, $require_once, $args );

   return $located;
}

/* --------------------------------------------------------------- */
/* ------------- [HELPER FUNCTION] LOAD TEMPLATE PART ------------ */
/* --------------------------------------------------------------- */

function load_template_part($template_name, $part_name = null, $args = null) {
    ob_start();
    bd_get_template_part($template_name, $part_name, $args);
    $var = ob_get_contents();
    ob_end_clean();
    return $var;
}

/* --------------------------------------------------------------- */
/* ------------------------ GET BLOG POSTS ----------------------- */
/* --------------------------------------------------------------- */

function get_bd_blog_posts($paged = 1, $limit = 3, $filters = null, $offset = null) {
    $args = array( 
        'post_type' => 'post', 
        'orderby' => 'date', 
        'order' => 'DESC', 
        'posts_per_page' => $limit,
        'paged' => intval($paged),
        'post_status' => 'publish'
    );

    if($filters) {
        $tax_query = get_tax_query($filters);
        $args['tax_query'] = $tax_query['tax_query'];
    }

	if($offset) {
		if ($paged !== 1) {
			$offset = ((intval($paged) - 1) * intval($limit)) + intval($offset);
		}
        $args['offset'] = $offset;
    } 

    $posts = new WP_Query($args);

    wp_reset_postdata(); 

    return $posts;
}

/* --------------------------------------------------------------- */
/* ---------------------- [HELPER] GET TAX QUERY ------------------ */
/* --------------------------------------------------------------- */

function get_tax_query($filters = null) {
    if(!$filters) {
        return;
    }

    $args = array(); 

    $filters_array = explode('&', $filters);

    $processed_filters = array();

    $taxonomies = get_taxonomies(['object_type' => ['post']]);
    $taxonomy_query_created = false;

    foreach($taxonomies as $taxonomy) {
        $processed_filters[$taxonomy] = array();
    }

    foreach($filters_array as $filter_string) {
        $filter = explode('=', $filter_string);

        array_push($processed_filters[$filter[0]], $filter[1]);
    }

    foreach($processed_filters as $filter_type => $filter_group) {
        if(!empty($filter_group)) {
            if(!$taxonomy_query_created) {
                $args['tax_query'] = array(
                    'relation' => 'AND'
                );
                $taxonomy_query_created = true;
            }
    
            array_push($args['tax_query'], array(
                'taxonomy' => $filter_type,
                'field'    => 'slug',
                'terms'    =>  $filter_group,
            ));
        }
    }

    return $args;
}

/* --------------------------------------------------------------- */
/* ----------------- [AJAX] LOAD MORE BLOG POSTS ----------------- */
/* --------------------------------------------------------------- */

function bd_blog_load_more() {
    if ( ! check_ajax_referer( 'security-nonce-bd-blog-grid', 'security', false ) ) {
        wp_send_json_error( 'Invalid security token sent. Reload this page and try again.' );
    }

    $paged = isset($_POST['paged']) ? $_POST['paged'] : null;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : null;
    $filters = isset($_POST['filters']) ? $_POST['filters'] : null;
    $offset = isset($_POST['offset']) ? $_POST['offset'] : null;

    $ajaxposts = get_bd_blog_posts($paged, $limit, $filters, $offset);
  
    $response = '';
  
    if($ajaxposts->have_posts()) {
      while($ajaxposts->have_posts()) : $ajaxposts->the_post();
        $response .= load_template_part('templates/blog', 'item');
      endwhile;
    }
  
    wp_send_json_success($response);
    exit;
}
add_action('wp_ajax_bd_blog_load_more', 'bd_blog_load_more');
add_action('wp_ajax_nopriv_bd_blog_load_more', 'bd_blog_load_more');

/* --------------------------------------------------------------- */
/* --------------------- [AJAX] FILTER POSTS --------------------- */
/* --------------------------------------------------------------- */

function filter_bd_blog_posts() {
    if ( ! check_ajax_referer( 'security-nonce-bd-blog-grid', 'security', false ) ) {
        wp_send_json_error( 'Invalid security token sent. Reload this page and try again.' );
        wp_die();
    }

    $paged = isset($_POST['paged']) ? $_POST['paged'] : null;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : null;
    $filters = isset($_POST['filters']) ? $_POST['filters'] : null;
    $offset = isset($_POST['offset']) ? $_POST['offset'] : null;
    $counter = 1;

    $ajaxposts = get_bd_blog_posts($paged, $limit, $filters);
  
    $response = '<div class="blog-grid-results" data-post-count="' . $ajaxposts->found_posts . '">';
  
    if($ajaxposts->have_posts()) {
      while($ajaxposts->have_posts()) : $ajaxposts->the_post();
        if($counter == 1 && $offset > 0) :
            $response .= load_template_part('templates/blog', 'featured'); 
        else :
            $response .= load_template_part('templates/blog', 'item');
        endif; 

        $counter++;
      endwhile;
    }

    $response .= '</div>';
  
    wp_send_json_success($response);
    exit;
}
add_action('wp_ajax_filter_bd_blog_posts', 'filter_bd_blog_posts');
add_action('wp_ajax_nopriv_filter_bd_blog_posts', 'filter_bd_blog_posts');