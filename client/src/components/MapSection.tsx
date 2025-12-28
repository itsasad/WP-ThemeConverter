import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const regions = [
  {
    id: "americas",
    label: "The Americas",
    img: "https://www.tbrglobal.com/wp-content/themes/tbrmono/assets/map/map2/map2-04-america.png",
    phone: "+1 857 214 7500",
    email: "res.us@tbrglobal.com",
    desc: "Headquartered in Boston, TBR is operational across the whole of The Americas thanks to an exceptional and industry-leading affiliate partner network.",
  },
  {
    id: "emea",
    label: "Europe, Middle East and Africa",
    img: "https://www.tbrglobal.com/wp-content/themes/tbrmono/assets/map/map2/map2-04-emea.png",
    phone: "+44 141 280 4800",
    email: "res.uk@tbrglobal.com",
    desc: "Where the business began, and where it continues to thrive, the region boasts TBR's global headquarters in Glasgow and proudly hosts its global centre of excellence in Dubai.",
  },
  {
    id: "apac",
    label: "Asia Pacific",
    img: "https://www.tbrglobal.com/wp-content/themes/tbrmono/assets/map/map2/map2-04-apac-b.png",
    phone: "+852 5804 2960",
    email: "res.asia@tbrglobal.com",
    desc: "TBR has grown exponentially across the Asia Pacific region, with four regional operational hubs each benefitting from local expert teams.",
  },
];

export function MapSection() {
  const [activeRegion, setActiveRegion] = useState(regions[1]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-display text-primary mb-8">
              Global Reach, <br/><span className="italic text-slate-500">Local Expertise</span>
            </h2>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-display text-primary mb-4">{activeRegion.label}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  {activeRegion.desc}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-bold w-6">T:</span>
                    <a href={`tel:${activeRegion.phone}`} className="text-primary hover:underline font-medium">{activeRegion.phone}</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-bold w-6">E:</span>
                    <a href={`mailto:${activeRegion.email}`} className="text-primary hover:underline font-medium">{activeRegion.email}</a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Region Selector (Mobile only really useful, but good for desktop too) */}
            <div className="flex gap-4 mt-12">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={`text-sm uppercase tracking-widest pb-1 border-b-2 transition-colors ${
                    activeRegion.id === region.id 
                      ? "border-primary text-primary" 
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {region.label.split(' ')[0]} {/* Show first word only for brevity */}
                </button>
              ))}
            </div>
          </div>

          {/* Map Visualization */}
          <div className="order-1 lg:order-2 relative h-[400px] flex items-center justify-center">
             <motion.img
              key={activeRegion.id}
              src={activeRegion.img}
              alt={activeRegion.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-full h-auto drop-shadow-2xl"
             />
          </div>

        </div>
      </div>
    </section>
  );
}
