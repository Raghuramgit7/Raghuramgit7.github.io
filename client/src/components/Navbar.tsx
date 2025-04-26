import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 bg-white/90 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "py-2 shadow" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-xl font-semibold text-primary flex items-center"
          >
            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              R
            </span>
            Raghuram G.N.
          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium hover:text-primary transition"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-primary transition"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
