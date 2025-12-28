import { motion } from "framer-motion";
import { Car, Tent, Briefcase, Check } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Car,
      title: "Corporate Travel",
      description: "Executive transportation solutions for business professionals worldwide.",
      features: ["Airport transfers", "Meeting transportation", "Multi-day bookings", "Account management"]
    },
    {
      icon: Tent,
      title: "Event Management",
      description: "Comprehensive ground transportation for events of any scale.",
      features: ["Event planning", "Guest coordination", "VIP services", "On-site management"]
    },
    {
      icon: Briefcase,
      title: "Financial Roadshows",
      description: "Specialized transportation for investment banking roadshows.",
      features: ["Multi-city coordination", "Real-time tracking", "Meeting schedules", "Dedicated support"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Tailored solutions for every requirement, delivering excellence across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-display text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed font-light text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-slate-600">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
