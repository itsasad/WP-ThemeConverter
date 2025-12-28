import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col justify-end">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://i.vimeocdn.com/video/1959900856-2e11df0de190254958391c9481b16c010c472beb6207b41ae70f6a273b4160ed-d?mw=80&q=85"
        >
          <source
            src="https://www.addisonlee.com/wp-content/uploads/2025/03/AL2025_030_Homepage_Video_CAR_B2B_DRAFT1-1.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/20">
          {[
            {
              title: "Corporate",
              desc: "Worldwide, premium transfers guaranteeing peace of mind for bookers and passengers",
            },
            {
              title: "Events",
              desc: "Fully project-managed ground transportation for one to +10,000 people",
            },
            {
              title: "Roadshows",
              desc: "Delivering ground transportation for 16 of the top 20 global investment banks",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
              className="group relative p-8 md:p-12 text-center border-b md:border-b-0 md:border-r border-white/20 last:border-r-0 hover:bg-white/5 transition-colors duration-300"
            >
              <h2 className="text-3xl md:text-4xl font-display text-white mb-4 tracking-tight">
                {item.title}
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-[280px] mx-auto h-20">
                {item.desc}
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black uppercase tracking-widest text-xs px-8 rounded-none transition-all duration-300 bg-transparent"
              >
                Explore
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="uppercase tracking-[0.2em] text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity">
          More
        </span>
        <ArrowDown className="w-5 h-5 animate-bounce opacity-70 group-hover:opacity-100" />
      </motion.button>
    </section>
  );
}
