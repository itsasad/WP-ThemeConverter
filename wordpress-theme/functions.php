<?php
function tbr_enqueue_styles() {
    wp_enqueue_style( 'main-style', get_stylesheet_uri() );
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap', array(), null );
}
add_action( 'wp_enqueue_scripts', 'tbr_enqueue_styles' );

function tbr_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'custom-logo' );
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'tbr-global' ),
    ) );
}
add_action( 'after_setup_theme', 'tbr_setup' );
?>
