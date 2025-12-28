import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 hover:bg-white hover:border-white transition-all duration-500 flex flex-col items-start justify-between min-h-[300px]"
    >
      <div>
        <h3 className="text-3xl md:text-4xl font-display text-white mb-6 group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>
        <p className="text-white/70 text-base md:text-lg leading-relaxed group-hover:text-primary/70 transition-colors duration-500">
          {description}
        </p>
      </div>
      
      <div className="mt-8 flex items-center gap-2 text-white/50 text-sm uppercase tracking-widest font-medium group-hover:text-primary group-hover:gap-4 transition-all duration-300">
        Explore <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}
