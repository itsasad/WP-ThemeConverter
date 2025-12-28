import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { MapSection } from "@/components/MapSection";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { ArrowDown, Car, Tent, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://www.addisonlee.com/wp-content/uploads/2025/03/AL2025_030_Homepage_Video_CAR_B2B_DRAFT1-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/40 hero-gradient mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-between h-full py-32">
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-9xl font-display text-white mb-6"
            >
              We are TBR
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl"
            >
              Global Chauffeuring. Defined by Excellence.
            </motion.p>
          </div>

          {/* Cards overlay at bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-auto">
            <ServiceCard 
              title="Corporate" 
              description="Worldwide, premium transfers guaranteeing peace of mind for bookers and passengers."
              delay={0.6}
            />
            <ServiceCard 
              title="Events" 
              description="Fully project-managed ground transportation for one to +10,000 people."
              delay={0.7}
            />
            <ServiceCard 
              title="Roadshows" 
              description="Delivering ground transportation for 16 of the top 20 global investment banks."
              delay={0.8}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* About / Stats Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display text-primary mb-8"
          >
            World Leader in Ground Transportation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-16"
          >
            TBR Global Chauffeuring relentlessly drives excellence across the financial roadshow, global events and corporate travel markets. Combining cutting-edge technology with award winning expertise, we enhance customer lives by consistently delivering a safe, high-quality service.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-12">
            {[
              { number: "120+", label: "Countries Covered" },
              { number: "24/7", label: "Global Support" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
              >
                <div className="text-5xl md:text-6xl font-display text-primary font-bold mb-2">{stat.number}</div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Interactive Map */}
      <MapSection />

      {/* Detailed Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-primary mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: Car, 
                title: "Corporate Travel", 
                desc: "Executive transportation solutions for business professionals worldwide.",
                features: ["Airport transfers", "Meeting transportation", "Multi-day bookings", "Account management"]
              },
              { 
                icon: Tent, 
                title: "Event Management", 
                desc: "Comprehensive ground transportation for events of any scale.",
                features: ["Event planning", "Guest coordination", "VIP services", "On-site management"]
              },
              { 
                icon: Briefcase, 
                title: "Financial Roadshows", 
                desc: "Specialized transportation for investment banking roadshows.",
                features: ["Multi-city coordination", "Real-time tracking", "Meeting schedules", "Dedicated support"]
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-display text-primary mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm h-10">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="text-white">
               <h2 className="text-4xl font-display mb-8">Contact Us</h2>
               <div className="space-y-8">
                 <div>
                   <h4 className="text-lg font-display mb-2 text-white/90">Europe, Middle East and Africa</h4>
                   <p className="text-white/60 mb-1">T: +44 141 280 4800</p>
                   <p className="text-white/60">E: res.uk@tbrglobal.com</p>
                 </div>
                 <div>
                   <h4 className="text-lg font-display mb-2 text-white/90">The Americas</h4>
                   <p className="text-white/60 mb-1">T: +1 857 214 7500</p>
                   <p className="text-white/60">E: res.us@tbrglobal.com</p>
                 </div>
                 <div>
                   <h4 className="text-lg font-display mb-2 text-white/90">Asia Pacific</h4>
                   <p className="text-white/60 mb-1">T: +852 5804 2960</p>
                   <p className="text-white/60">E: res.asia@tbrglobal.com</p>
                 </div>
               </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs uppercase tracking-widest gap-4">
            <p>© 2024 TBR Global Chauffeuring. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
