<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', function() {

	// Register the block.
	register_block_type( 'ideabox/toc', [
		'style' => 'ib-block-toc',
		'editor_script' => 'ib-block-toc',
		'editor_style' => 'ib-block-toc-editor',
		'render_callback' => function( $attrs, $content ) {
			wp_enqueue_script( 'ib-block-toc-frontend' );
			return $content;
		},
	] );

	wp_register_script(
		'ib-block-toc-frontend',
		plugins_url( 'frontend.js', __FILE__ ),
		[ 'jquery' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'frontend.js' ),
		true
	);

	wp_set_script_translations( 'ideabox/toc', 'ib-block-toc' );
} );

add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script( 'ib-block-toc-frontend' );
} );