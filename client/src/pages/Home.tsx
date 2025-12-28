import { motion } from "framer-motion";
import { Car, Tent, Briefcase, ChevronDown, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const scrollToContent = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-end justify-center pb-20 md:pb-32">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop"
          >
            <source
              src="https://www.addisonlee.com/wp-content/uploads/2025/03/AL2025_030_Homepage_Video_CAR_B2B_DRAFT1-1.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        </div>

        {/* Hero Content - Cards */}
        <div className="container relative z-30 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Card 1: Corporate */}
            <div className="group relative overflow-hidden bg-background/80 backdrop-blur-md border border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <h2 className="text-2xl font-display font-bold text-white mb-3">Corporate</h2>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Worldwide, premium transfers guaranteeing peace of mind for bookers and passengers alike.
              </p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-colors">
                Explore
              </Button>
            </div>

            {/* Card 2: Events */}
            <div className="group relative overflow-hidden bg-background/80 backdrop-blur-md border border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75" />
              <h2 className="text-2xl font-display font-bold text-white mb-3">Events</h2>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Fully project-managed ground transportation for groups ranging from one to +10,000 people.
              </p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-colors">
                Explore
              </Button>
            </div>

            {/* Card 3: Roadshows */}
            <div className="group relative overflow-hidden bg-background/80 backdrop-blur-md border border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150" />
              <h2 className="text-2xl font-display font-bold text-white mb-3">Roadshows</h2>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Delivering flawless ground transportation for 16 of the top 20 global investment banks.
              </p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-colors">
                Explore
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer flex flex-col items-center gap-2 text-white/50 hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-medium">Discover</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">We are Berry Executive</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              A world leader in ground transportation, relentlessly driving excellence across the financial roadshow, 
              global events, and corporate travel markets. We define the standard for luxury mobility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { number: "120+", label: "Countries Covered" },
              { number: "24/7", label: "Global Support" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 border border-white/5 bg-white/[0.02] rounded-lg"
              >
                <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-widest text-white/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 bg-[#0d1220]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Our Services</h2>
              <div className="h-1 w-20 bg-primary" />
            </div>
            <p className="text-muted-foreground max-w-md text-right md:text-left">
              Bespoke transport solutions tailored to the unique demands of our distinguished clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background border border-white/5 p-8 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Corporate Travel</h3>
              <p className="text-muted-foreground mb-8 text-sm">
                Executive transportation solutions designed for business professionals who value efficiency and comfort.
              </p>
              <ul className="space-y-3">
                {['Airport transfers', 'Meeting transportation', 'Multi-day bookings', 'Account management'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background border border-white/5 p-8 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Tent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Event Management</h3>
              <p className="text-muted-foreground mb-8 text-sm">
                Comprehensive ground transportation logistics for large-scale events, galas, and summits.
              </p>
              <ul className="space-y-3">
                {['Event planning', 'Guest coordination', 'VIP services', 'On-site management'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background border border-white/5 p-8 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Financial Roadshows</h3>
              <p className="text-muted-foreground mb-8 text-sm">
                Specialized transportation with high-touch service for investment banking roadshows and IPO tours.
              </p>
              <ul className="space-y-3">
                {['Multi-city coordination', 'Real-time tracking', 'Meeting schedules', 'Dedicated support'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - using visual break */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">Ready to Experience Excellence?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
            Whether for business or pleasure, let us handle the journey so you can focus on the destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 h-auto">
              Book Your Transfer
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 h-auto">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
