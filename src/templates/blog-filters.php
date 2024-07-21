<?php 

    $categories = get_terms( array(
        'taxonomy' => 'category',
        'hide_empty' => true,
    ) );

    $filters = isset($args['filters']) ? $args['filters'] : [];
?>
<div class="blog-grid-menu">
    <h2 class="blog-grid-meta-results-count"><?php echo $args['post_count']; ?> Results</h2>
    <form id="filters-form" class="filters-form">
        <fieldset>   
            <legend class="sr-only">Categories</legend>
            <div class="filters-menu">
                <?php 
                $counter = 1;

                foreach($categories as $category) { 
                    $active = false;

                    if(in_array('category=' . $category->slug, $filters)) {
                        $active = true;
                    }
                    
                ?>
                    <label class="input-checkbox">
                        <input type="checkbox" name="category" value="<?php echo $category->slug; ?>" class="<?php echo $category->slug; ?>" <?php if($active) { ?>checked<?php } ?>><?php echo $category->name; ?>
                    </label>
                <?php } ?>
            </div>
        </fieldset> 
    </form>
</div>
