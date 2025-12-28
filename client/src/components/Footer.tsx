import { Link } from "wouter";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Footer Logo */}
        <div className="mb-12">
          <img 
            src="https://www.tbrglobal.com/wp-content/themes/tbrmono/assets/img/logo-tbr-footer.png" 
            alt="TBR Global Chauffeuring" 
            className="h-12 opacity-90"
          />
        </div>

        <h3 className="text-xl font-display text-white mb-10 tracking-wide">
          Contact your regional team
        </h3>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full max-w-5xl mb-16 text-center">
          {/* EMEA */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-display tracking-wide border-b border-white/10 pb-4 mb-4">
              Europe, Middle East and Africa
            </h4>
            <div className="space-y-2 text-sm md:text-base text-gray-400 font-light">
              <p>T: <a href="tel:+441412804800" className="hover:text-white transition-colors">+44 141 280 4800</a></p>
              <p>E: <a href="mailto:res.uk@tbrglobal.com" className="hover:text-white transition-colors">res.uk@tbrglobal.com</a></p>
            </div>
          </div>

          {/* Americas */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-display tracking-wide border-b border-white/10 pb-4 mb-4">
              The Americas
            </h4>
            <div className="space-y-2 text-sm md:text-base text-gray-400 font-light">
              <p>T: <a href="tel:+18572147500" className="hover:text-white transition-colors">+1 857 214 7500</a></p>
              <p>E: <a href="mailto:res.us@tbrglobal.com" className="hover:text-white transition-colors">res.us@tbrglobal.com</a></p>
            </div>
          </div>

          {/* APAC */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-display tracking-wide border-b border-white/10 pb-4 mb-4">
              Asia Pacific
            </h4>
            <div className="space-y-2 text-sm md:text-base text-gray-400 font-light">
              <p>T: <a href="tel:+85258042960" className="hover:text-white transition-colors">+852 5804 2960</a></p>
              <p>E: <a href="mailto:res.asia@tbrglobal.com" className="hover:text-white transition-colors">res.asia@tbrglobal.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 text-xs md:text-sm text-gray-400 uppercase tracking-wider font-medium">
          <Link href="/quote" className="hover:text-white transition-colors">Request a quote</Link>
          <span className="text-gray-700 hidden md:inline">|</span>
          <Link href="/driver-app" className="hover:text-white transition-colors">Driver App</Link>
          <span className="text-gray-700 hidden md:inline">|</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link>
          <span className="text-gray-700 hidden md:inline">|</span>
          <Link href="/policies" className="hover:text-white transition-colors">Policies</Link>
          <span className="text-gray-700 hidden md:inline">|</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] md:text-xs text-gray-600 font-light space-y-2">
          <p>&copy; {new Date().getFullYear()} Copyright TBR Global. All Images Copyright TBR Global.</p>
          <p>Registered Office: 15 Birkmyre Road, Glasgow G51 3JH.</p>
          <p>Registered in Scotland No: SC427359</p>
        </div>
      </div>
    </footer>
  );
}
