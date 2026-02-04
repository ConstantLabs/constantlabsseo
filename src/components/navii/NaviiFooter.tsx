import { motion } from "framer-motion";
import { Heart, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Demo", href: "#demo" },
      { label: "For Venues", href: "#partners" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#waitlist" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/naviiapp", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/navii", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/naviiapp", label: "Instagram" },
];

export const NaviiFooter = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-navii-bg">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-navii-cyan via-white to-navii-magenta bg-clip-text text-transparent mb-4 font-rajdhani">
              NAVII
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Indoor Navigation, Reinvented.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-white/10
                           flex items-center justify-center
                           hover:border-navii-cyan/50 hover:bg-navii-cyan/10
                           transition-colors"
                >
                  <social.icon className="w-4 h-4 text-gray-400 hover:text-navii-cyan" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-navii-cyan transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Navii. All rights reserved.
          </p>
        </div>
      </div>

      {/* Confidentiality notice */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-600 text-xs text-center leading-relaxed">
            All rights reserved. This proposal, including all concepts, methodologies,
            technical specifications, and intellectual property contained herein,
            is confidential and proprietary. Unauthorized use, reproduction,
            or distribution is strictly prohibited.
          </p>
        </div>
      </div>

      {/* Made with love */}
      <div className="border-t border-white/5 py-4">
        <p className="text-gray-600 text-xs text-center flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-navii-magenta fill-navii-magenta" /> in Dubai
        </p>
      </div>
    </footer>
  );
};
