<?php 

/*
Plugin Name: Phone Link
Description: A block that creates a telephone link.
Version: 1.0.0
Author: Craig5117
Author URI: https://craigbennett-reaction.herokuapp.com/
*/

// exit if accessed directly

if( ! defined('ABSPATH') ) exit;

class TelLink {
    function __construct() {
        add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_enqueue_script('telLink', plugin_dir_url(__FILE__) . './build/index.js', array('wp-blocks', 'wp-element'));
    }
}

$telLink = new TelLink();