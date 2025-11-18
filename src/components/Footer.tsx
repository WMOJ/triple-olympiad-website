import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 md:mt-24">
          <div className="px-8 md:px-16 lg:px-24 py-0 md:py-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.webp"
                  alt="WOSS Triple Olympiad Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-white font-bold text-lg">WOSS</h3>
                  <p className="text-green-400 text-sm font-medium">
                    Triple Olympiad
                  </p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Empowering students through comprehensive STEM competitions
                across Mathematics, Science, and Computer Programming. Building
                tomorrow's innovators today.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <nav className="space-y-3">
                <a
                  href="#about"
                  className="block text-white/70 hover:text-green-400 transition-colors text-sm"
                >
                  About
                </a>
                <a
                  href="#schedule"
                  className="block text-white/70 hover:text-green-400 transition-colors text-sm"
                >
                  Schedule
                </a>
                <a
                  href="#venue"
                  className="block text-white/70 hover:text-green-400 transition-colors text-sm"
                >
                  Venue
                </a>
                <a
                  href="#faq"
                  className="block text-white/70 hover:text-green-400 transition-colors text-sm"
                >
                  FAQ
                </a>
                <a
                  href="#team"
                  className="block text-white/70 hover:text-green-400 transition-colors text-sm"
                >
                  Team
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="text-white/70">
                  <p>1330 Montclair Dr</p>
                  <p>Oakville, ON L6H 1Z5</p>
                </div>
                {/* <div className="text-white/70">
                  <p>(416) 555-0123</p>
                </div> */}
                <div className="text-white/70">
                  <a
                    href="mailto:wosstriolympiad@gmail.com"
                    className="text-white/70 hover:text-green-400 transition-colors"
                  >
                    wosstriolympiad@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/50 text-sm">
                © {currentYear} WOSS Triple Olympiad. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white/50 hover:text-green-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/50 hover:text-green-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="/sitemap.xml"
                  className="text-white/50 hover:text-green-400 transition-colors text-sm"
                >
                  Sitemap
                </a>
                <a
                  href="/robots.txt"
                  className="text-white/50 hover:text-green-400 transition-colors text-sm"
                >
                  Robots
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
