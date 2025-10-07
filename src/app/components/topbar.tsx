"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  MessageCircle,
  Menu,
  X,
  UserPlus,
  ArrowRight,
  Star,
  Shield,
  Link,
} from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const TopBarLP: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (typeof document !== "undefined") {
      document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, []);

  const handleNavLinkClick = (targetId: string) => {
    scrollToSection(targetId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`w-full h-16 sticky top-0 z-50 font-poppins transition-all duration-300 ${scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Mais atraente */}
            <div>
              <a
                href="#"
                className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#00b153] to-[#05365F] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className={`text-xl font-bold transition-colors ${scrolled ? "text-[#05365F]" : "text-white"
                    }`}>
                    EduTec
                  </span>
                  <span className={`text-xs transition-colors ${scrolled ? "text-gray-600" : "text-gray-200"
                    }`}>
                    Transforme seu futuro
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Foco no CTA */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Benefícios rápidos */}
              <div className="flex items-center space-x-6">
                <div className={`flex items-center space-x-2 transition-colors ${scrolled ? "text-gray-700" : "text-white"
                  }`}>
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">100% Seguro</span>
                </div>
                <div className={`flex items-center space-x-2 transition-colors ${scrolled ? "text-gray-700" : "text-white"
                  }`}>
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">Avaliação 5★</span>
                </div>
              </div>

              {/* Links de navegação simplificados */}
              <a
                href="#sobre"
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium hover:scale-105 ${scrolled
                  ? "text-gray-700 hover:text-[#00b153]"
                  : "text-white hover:text-gray-200"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("sobre");
                }}
              >
                Sobre nós
              </a>
              <a
                href="#polos"
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium hover:scale-105 ${scrolled
                  ? "text-gray-700 hover:text-[#00b153]"
                  : "text-white hover:text-gray-200"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("depoimentos");
                }}
              >
                Nossos Polos
              </a>

              <a
                href="#depoimentos"
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium hover:scale-105 ${scrolled
                  ? "text-gray-700 hover:text-[#00b153]"
                  : "text-white hover:text-gray-200"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("text");
                }}
              >
                Depoimentos
              </a>

              {/* CTA Principal - Mais destacado */}
              <button
                type="button"
                onClick={() => handleNavLinkClick("lead-form")}
                className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-[#00b153] to-[#05365F] text-white rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#00b153] focus:ring-opacity-50 animate-pulse hover:animate-none"
              >
                <UserPlus className="w-5 h-5" />
                <span>Entre em contato!</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer ${scrolled
                ? "text-[#05365F] hover:bg-gray-100"
                : "text-white hover:bg-white hover:text-[#05365F]"
                }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-200">
            <nav className="flex flex-col p-6 space-y-4">
              {/* Mobile Benefícios */}
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Shield className="w-4 h-4 text-[#00b153]" />
                  <span className="text-sm">100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Star className="w-4 h-4 text-[#00b153]" />
                  <span className="text-sm">Avaliação 5★</span>
                </div>
              </div>

              {/* Mobile Links */}
              <Link
                href="#sobre"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#00b153] hover:text-white transition-all duration-200 font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("beneficios");
                }}
              >
                <Home className="w-5 h-5" />
                <span>Sobre nós</span>
              </Link>

              <Link
                href="#polos"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#00b153] hover:text-white transition-all duration-200 font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("beneficios");
                }}
              >
                <Home className="w-5 h-5" />
                <span>Nossos Pólos</span>
              </Link>

              <Link
                href="#depoimentos"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#00b153] hover:text-white transition-all duration-200 font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("depoimentos");
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Depoimentos</span>
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4">
                <button 
                  type="button"
                  onClick={() => handleNavLinkClick("lead-form")}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-[#00b153] to-[#05365F] text-white rounded-xl font-bold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Entre em contato!</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default TopBarLP;