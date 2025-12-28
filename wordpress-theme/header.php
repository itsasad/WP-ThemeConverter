<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="World leader in ground transportation. Premium chauffeuring for corporate, events and roadshows.">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <!-- Header -->
    <header>
        <div class="header-container">
            <a href="<?php echo home_url(); ?>" class="logo">
                <?php 
                if ( has_custom_logo() ) {
                    the_custom_logo();
                } else {
                    echo 'Berry Executive cars';
                }
                ?>
            </a>
            <nav>
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => '',
                    'items_wrap' => '<ul>%3$s<li><a href="#" class="btn">Login</a></li><li><a href="#" class="btn btn-primary">Request Quote</a></li></ul>',
                ) );
                ?>
            </nav>
            <button class="mobile-menu-toggle">☰</button>
        </div>
    </header>
