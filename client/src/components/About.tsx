import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-8">We are TBR</h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-light">
            TBR Global Chauffeuring is a world leader in ground transportation, relentlessly driving excellence across the financial roadshow, global events and corporate travel markets.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Combining cutting-edge technology with award winning expertise, TBR enhances customer lives by consistently delivering a safe, high-quality service, providing complete confidence.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-display text-primary mb-6">Global Reach, Local Expertise</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            With a combination of our own fleet and an unrivalled network of global affiliates, all of which adhere to our high standards of service delivery and customer excellence, TBR provides a premium regional service on a global scale. Our highly experienced global corporate, events and roadshows teams expertly support our customers’ requirements anywhere in the world.
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground/70">
            (Click on the map below to find out more about our service across the world)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {[
            {
              region: "The Americas",
              img: "https://www.tbrglobal.com/wp-content/themes/tbrmono/assets/map/map2/map2-04-america.png",
              hq: "Headquartered in Boston",
              phone: "+1 857 214 7500",
              email: "res.us@tbrglobal.com"
            },
            {
              region: "Europe, Middle East and Africa",
              img: "https://www.tbrglobal.com/wp-content/themes/tbrmono/assets/map/map2/map2-04-emea.png",
              hq: "Global HQ in Glasgow",
              phone: "+44 141 280 4800",
              email: "res.uk@tbrglobal.com"
            },
            {
              region: "Asia Pacific",
              img: "https://www.tbrglobal.com/wp-content/themes/tbrmono/assets/map/map2/map2-04-apac-b.png",
              hq: "Four regional operational hubs",
              phone: "+852 5804 2960",
              email: "res.asia@tbrglobal.com"
            }
          ].map((item, i) => (
            <motion.div
              key={item.region}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="relative w-full max-w-[300px] aspect-square mb-8 overflow-hidden rounded-full border border-transparent hover:border-black/5 transition-colors duration-500 p-4">
                <img 
                  src={item.img} 
                  alt={item.region} 
                  className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              
              <h4 className="text-2xl font-display text-primary mb-4 group-hover:text-primary/80 transition-colors">
                {item.region}
              </h4>
              
              <div className="space-y-1 text-muted-foreground font-light text-sm">
                <p>{item.hq}</p>
                <p>T: <a href={`tel:${item.phone}`} className="hover:text-primary transition-colors">{item.phone}</a></p>
                <p>E: <a href={`mailto:${item.email}`} className="hover:text-primary transition-colors">{item.email}</a></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
