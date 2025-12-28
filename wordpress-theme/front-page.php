<?php get_header(); ?>

    <!-- Hero Section -->
    <section class="hero">
        <video class="hero-video" autoplay loop muted playsinline>
            <source src="https://www.addisonlee.com/wp-content/uploads/2025/03/AL2025_030_Homepage_Video_CAR_B2B_DRAFT1-1.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
        
        <div class="hero-content">
            <div class="services-grid">
                <div class="service-card">
                    <h2>Corporate</h2>
                    <p>Worldwide, premium transfers guaranteeing peace of mind for bookers and passengers</p>
                    <button class="btn">Explore</button>
                </div>
                <div class="service-card">
                    <h2>Events</h2>
                    <p>Fully project-managed ground transportation for one to +10,000 people</p>
                    <button class="btn">Explore</button>
                </div>
                <div class="service-card">
                    <h2>Roadshows</h2>
                    <p>Delivering ground transportation for 16 of the top 20 global investment banks</p>
                    <button class="btn">Explore</button>
                </div>
            </div>
        </div>

        <div class="scroll-indicator" onclick="window.scrollTo({top: window.innerHeight, behavior: 'smooth'})">
            <span>More</span>
            <div>↓</div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="about-container">
            <h2>We are TBR</h2>
            <p>
                TBR Global Chauffeuring is a world leader in ground transportation, relentlessly 
                driving excellence across the financial roadshow, global events and corporate travel markets.
            </p>
            
            <div class="stats-grid">
                <div class="stat">
                    <div class="stat-number">120+</div>
                    <div class="stat-label">Countries Covered</div>
                </div>
                <div class="stat">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Global Support</div>
                </div>
                <div class="stat">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="services-container">
            <h2>Our Services</h2>
            <div class="detailed-services">
                <div class="detailed-service-card">
                    <div class="service-icon">🚗</div>
                    <h3>Corporate Travel</h3>
                    <p>Executive transportation solutions for business professionals worldwide.</p>
                    <ul class="feature-list">
                        <li>Airport transfers</li>
                        <li>Meeting transportation</li>
                        <li>Multi-day bookings</li>
                        <li>Account management</li>
                    </ul>
                </div>
                <div class="detailed-service-card">
                    <div class="service-icon">🎪</div>
                    <h3>Event Management</h3>
                    <p>Comprehensive ground transportation for events of any scale.</p>
                    <ul class="feature-list">
                        <li>Event planning</li>
                        <li>Guest coordination</li>
                        <li>VIP services</li>
                        <li>On-site management</li>
                    </ul>
                </div>
                <div class="detailed-service-card">
                    <div class="service-icon">💼</div>
                    <h3>Financial Roadshows</h3>
                    <p>Specialized transportation for investment banking roadshows.</p>
                    <ul class="feature-list">
                        <li>Multi-city coordination</li>
                        <li>Real-time tracking</li>
                        <li>Meeting schedules</li>
                        <li>Dedicated support</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
