import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp.png"; // WhatsApp icon image

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  // Show WhatsApp icon only when footer is visible
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer-section");
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      setShowWhatsapp(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#expertise" },
    { name: "Products", href: "#products" },
    { name: "Projects", href: "#projects" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer-section" className="bg-foreground text-white py-12 relative">
      {/* Invisible anchor for Navbar scroll */}
      <div id="contact" className="absolute -top-20"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Triaxiz Logo"
                className="h-16 w-16 transition-transform duration-300 hover:scale-110"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Triaxiz
                </h3>
                <p className="text-xs text-white/60">Technical Services LLC</p>
              </div>
            </div>

            <p className="text-white/80 mb-4">
              Engineering excellence through innovation. Your trusted partner for industrial automation and custom machinery solutions.
            </p>

            <p className="text-white/80 mb-4">Need help? Chat with us</p>

            {/* Icons Row */}
            <div className="flex gap-4">
              {/* Email Icon */}
              <a
                href="mailto:sales@triaxizuae.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* WhatsApp Icon (only visible in footer) */}
              {showWhatsapp && (
                <a
                  href="https://wa.me/971523944779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full overflow-hidden flex items-center justify-center hover:bg-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="w-full h-full object-cover"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <strong className="text-white">Address:</strong><br />
                Office No 202-541, Alsuaidi 2<br />
                Al Murar, Dubai, UAE
              </li>
              <li>
                <strong className="text-white">Phone:</strong><br />
                +971 52 394 4779
              </li>
              <li>
                <strong className="text-white">Email:</strong><br />
                sales@triaxizuae.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© {currentYear} Triaxiz Technical Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
