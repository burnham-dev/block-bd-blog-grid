<div <?php echo get_block_wrapper_attributes($attributes); ?>>
	<style>
		.wp-block-create-block-bd-blog-grid .blog-grid-results-featured:before,
		.wp-block-create-block-bd-blog-grid .blog-grid-results-featured:after {
			background-image: <?php echo $attributes['gradient']; ?>;
		}
	</style>

	<?php

	$show_filters = $attributes['showFilters'];
	$show_featured = $attributes['showFeaturedPost'];

	$limit = 9;
	$counter = 1;

	$args = array( 
        'post_type' => 'post', 
        'orderby' => 'date', 
        'order' => 'DESC', 
        'posts_per_page' => $show_featured ? $limit + 1 : $limit,
        'paged' => 1,
        'post_status' => 'publish'
    );
    $posts = new WP_Query($args);

	
	if ( $posts->have_posts() ) : ?>
		<div id="bd-blog-grid" class="blog-grid" data-page="1" data-offset="<?php echo $show_featured ? 1 : 0; ?>" data-limit="<?php echo $limit; ?>">
			<?php if($show_filters) : ?>
				<?php bd_get_template_part('templates/blog', 'filters', array('module_id' => 1, 'post_count' => $posts->found_posts)); ?>
			<?php endif; ?>
			<div class="blog-grid-results">
			<?php while ( $posts->have_posts() ) :
				$posts->the_post();

				if($show_featured && $counter == 1) :
					bd_get_template_part('templates/blog', 'featured'); 
				else :
					bd_get_template_part('templates/blog', 'item');
				endif; 


				$counter++;
			endwhile; ?>

				</div>

			<?php if($show_featured) :
						$limit++;
				endif;
			?>
			<?php if($posts->found_posts > $limit) : ?>
				<div class="blog-grid-load-more load-more-container">
					<input type="hidden" value="<?php echo $posts->found_posts; ?>" data-post-count />
					<button class="button" id="load-more-bd-blog">Load More</button>
				</div>
			<?php endif; ?>

		</div>

		<?php wp_reset_postdata(); 
	endif; 
	?>
</div>