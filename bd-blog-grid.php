<?php
/**
 * Plugin Name:       BD Blog Grid
 * Description:       Blog grid block for the Gutenberg editor
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Amanda Burnham
 * Author URI:        https://burnham.dev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bd-blog-grid
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

include( __DIR__ . '/src/includes/functions.php');

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_bd_blog_grid_block_init() {
	register_block_type( __DIR__ . '/build' );

    $php_vars['security'] = wp_create_nonce( 'security-nonce-bd-blog-grid' );
    $php_vars['ajax_url'] = admin_url( 'admin-ajax.php' );

	wp_enqueue_script( 'blog-grid', plugin_dir_url(__FILE__) . 'src/assets/js/blog-grid.js', array( 'jquery' ) ); 
	wp_localize_script( 'blog-grid', 'phpVars', $php_vars);
}
add_action( 'init', 'create_block_bd_blog_grid_block_init' );