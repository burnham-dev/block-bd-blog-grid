<?php 

global $post;

$feat_image_url = wp_get_attachment_url( get_post_thumbnail_id() );
?>

<div class="blog-grid-results-featured blog-grid-results-item" style="background-image: url(<?php echo $feat_image_url; ?>);" data-post-id="<?php echo $post->ID; ?>">
    <div class="blog-grid-results-featured__content">
        <div class="blog-grid-results-featured__content-wrap">
            <span class="blog-grid-results-featured__date blog-grid-results-item__date"><?php echo get_the_date(); ?></span>
            <h3 class="blog-grid-results-featured__title blog-grid-results-item__title"><?php the_title(); ?></h3>
            <button class="blog-grid-results-featured__link blog-grid-results-item__link button" tabindex="-1">Read More</button>
        </div>
    </div>
    <a href="<?php the_permalink() ?>" class="full-link" aria-label="Read More - <?php echo get_the_title(); ?>"></a>
</div>