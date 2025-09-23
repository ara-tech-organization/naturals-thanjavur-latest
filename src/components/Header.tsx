import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile submenu states
  const [showServicesMobile, setShowServicesMobile] = useState(false);
  const [showPlansMobile, setShowPlansMobile] = useState(false);

  // Desktop submenu states (controlled with mouse enter/leave + click)
  const [showServicesDesktop, setShowServicesDesktop] = useState(false);
  const [showPlansDesktop, setShowPlansDesktop] = useState(false);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
    setShowServicesMobile(false);
    setShowPlansMobile(false);
    setShowServicesDesktop(false);
    setShowPlansDesktop(false);
  };

  // allow Esc to close open desktop dropdowns
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowServicesDesktop(false);
      setShowPlansDesktop(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 text-[#fff]">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+91 90870 00049</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>naturals.tj2@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block text-[#fff]">
            <span>Premium Beauty & Bridal Services in Thanjavur</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className="font-forum container mx-auto px-4 py-4 bg-white relative font-bold"
        onKeyDown={handleKeyDown}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick}>
            <img src="./images/logo1.jpeg" alt="Logo" width="150px" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-[#7f4899] relative text-xl">
            <Link
              to="/"
              onClick={handleNavClick}
              className={`hover:text-[#7f4899] ${
                isActive("/")
                  ? "font-bold underline underline-offset-4"
                  : "font-medium"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={handleNavClick}
              className={`hover:text-[#7f4899] ${
                isActive("/about")
                  ? "font-bold underline underline-offset-4"
                  : "font-medium"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesDesktop(true)}
              onMouseLeave={() => setShowServicesDesktop(false)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={showServicesDesktop}
                onClick={() => setShowServicesDesktop((s) => !s)}
                className={`flex items-center focus:outline-none hover:text-[#7f4899] ${
                  location.pathname.startsWith("/services") ||
                  location.pathname === "/bridal-packages"
                    ? "font-bold underline underline-offset-4"
                    : "font-medium"
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <div
                // keep visible while mouse is inside this container too
                className={`absolute top-full left-0 mt-0 bg-white text-[#7f4899] shadow-lg rounded-md py-2 z-50 min-w-[180px] ${
                  showServicesDesktop ? "block" : "hidden"
                }`}
                onMouseEnter={() => setShowServicesDesktop(true)}
                onMouseLeave={() => setShowServicesDesktop(false)}
              >
                <Link
                  to="/services"
                  onClick={handleNavClick}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  All Services
                </Link>
                <Link
                  to="/bridal-packages"
                  onClick={handleNavClick}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Bridal Packages
                </Link>
              </div>
            </div>

            {/* Plans Dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setShowPlansDesktop(true)}
              onMouseLeave={() => setShowPlansDesktop(false)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={showPlansDesktop}
                onClick={() => setShowPlansDesktop((s) => !s)}
                className={`flex items-center focus:outline-none hover:text-[#7f4899] ${
                  location.pathname === "/pricing" ||
                  location.pathname === "/membership"
                    ? "font-bold underline underline-offset-4"
                    : "font-medium"
                }`}
              >
                Plans <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <div
                className={`absolute top-full left-0 mt-0 bg-white text-[#7f4899] shadow-lg rounded-md py-2 z-50 min-w-[180px] ${
                  showPlansDesktop ? "block" : "hidden"
                }`}
                onMouseEnter={() => setShowPlansDesktop(true)}
                onMouseLeave={() => setShowPlansDesktop(false)}
              >
                <Link
                  to="/pricing"
                  onClick={handleNavClick}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Pricing
                </Link>
                <Link
                  to="/membership"
                  onClick={handleNavClick}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Membership
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={handleNavClick}
              className={`hover:text-[#7f4899] ${
                isActive("/contact")
                  ? "font-bold underline underline-offset-4"
                  : "font-medium"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#7f4899]"
            onClick={() => setIsMenuOpen((s) => !s)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="font-forum lg:hidden mt-4 pb-4 border-t pt-4 text-[#7f4899]">
            <Link to="/" className="block py-2" onClick={handleNavClick}>
              Home
            </Link>
            <Link to="/about" className="block py-2" onClick={handleNavClick}>
              About
            </Link>

            {/* Services Submenu Mobile */}
            <button
              className="block py-2 w-full text-left font-bold"
              onClick={() => setShowServicesMobile((s) => !s)}
            >
              Services
            </button>
            {showServicesMobile && (
              <div className="pl-4">
                <Link
                  to="/services"
                  className="block py-2"
                  onClick={handleNavClick}
                >
                  All Services
                </Link>
                <Link
                  to="/bridal-packages"
                  className="block py-2"
                  onClick={handleNavClick}
                >
                  Bridal Packages
                </Link>
              </div>
            )}

            {/* Plans Submenu Mobile */}
            <button
              className="block py-2 w-full text-left font-bold"
              onClick={() => setShowPlansMobile((s) => !s)}
            >
              Plans
            </button>
            {showPlansMobile && (
              <div className="pl-4">
                <Link
                  to="/pricing"
                  className="block py-2"
                  onClick={handleNavClick}
                >
                  Pricing
                </Link>
                <Link
                  to="/membership"
                  className="block py-2"
                  onClick={handleNavClick}
                >
                  Membership
                </Link>
              </div>
            )}

            <Link to="/contact" className="block py-2" onClick={handleNavClick}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
