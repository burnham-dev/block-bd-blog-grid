<div class="blog-grid-results-item">
    <div class="blog-grid-results-item__image"><?php echo get_the_post_thumbnail(null, 'large'); ?></div>
    <span class="blog-grid-results-item__date"><?php echo get_the_date(); ?></span>
    <h3 class="blog-grid-results-item__title"><?php the_title(); ?></h3>
    <button class="blog-grid-results-item__link button" tabindex="-1">Read More</button>
    <a href="<?php the_permalink(); ?>" class="full-link" aria-label="Read More - <?php echo get_the_title(); ?>"></a>
</div>