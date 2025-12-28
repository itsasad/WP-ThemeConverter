import { Link } from "wouter";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0f1c] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {['Corporate', 'Events', 'Roadshows', 'Private'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-semibold text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="font-semibold text-white w-16">Phone:</span>
                <a href="tel:+442012345678" className="hover:text-primary transition-colors">+44 20 1234 5678</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="font-semibold text-white w-16">Email:</span>
                <a href="mailto:info@tbrglobal.com" className="hover:text-primary transition-colors">info@tbrglobal.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="font-semibold text-white w-16">Address:</span>
                <span>One Canada Square,<br />London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
          <p>&copy; {new Date().getFullYear()} Berry Executive. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
