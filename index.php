<?php
/**
 * Plugin Name: Table of Contents
 * Description: Improve readability and navigation of your websites with the Table of Contents Block.
 * Version:     1.0.0
 * Author:      Achal Jain
 * Author URI:  https://achalj.github.io
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Register Block Scripts
add_action( 'init', function() {
	$asset_file   = __DIR__ . '/index.asset.php';
	$asset        = file_exists( $asset_file ) ? require_once $asset_file : null;
	$dependencies = isset( $asset['dependencies'] ) ? $asset['dependencies'] : [];
	$version      = isset( $asset['version'] ) ? $asset['version'] : filemtime( __DIR__ . '/index.js' );

	// Block JS
	wp_register_script(
		'ib-block-toc',
		plugins_url( 'index.js', __FILE__ ),
		$dependencies,
		$version,
		true
	);

	// Block front end style
	wp_register_style(
		'ib-block-toc',
		plugins_url( 'style.css', __FILE__ ),
		[],
		filemtime( __DIR__ . '/style.css' )
	);

	// Block editor style
	wp_register_style(
		'ib-block-toc-editor',
		plugins_url( 'editor.css', __FILE__ ),
		[],
		filemtime( __DIR__ . '/editor.css' )
	);

	wp_set_script_translations( 'ib-block-toc', 'ib-block-toc' );
} );

/**
 * AUTO-GENERATED blocks will be added here
 */

include_once __DIR__ . '/blocks/toc.php';
