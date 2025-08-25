import { Badge } from "../../components/ui/badge";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigationItems = [
    { title: "About", path: "/about-us" },
    { title: "Services", path: "/services" },
    { title: "Products", path: "/products" },
    { title: "Industries", path: "/industries" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", platform: "fb", href: "#" },
  ];

  return (
    <footer className="flex flex-col gap-6 sm:gap-10 lg:gap-20 w-full items-center p-4 sm:p-6 md:p-10 lg:p-24 bg-transparent [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(119,140,183,1)_100%)]">
      <div className="flex flex-col lg:flex-row w-full justify-between gap-6 sm:gap-8 lg:gap-16">
        {/* Logo and Description */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3 sm:gap-4">
          <img
            className="w-[100px] sm:w-[120px] lg:w-[135px] h-[56px] sm:h-[68px] lg:h-[76px] object-cover"
            alt="SG5.ai logo"
            src="/hh-sg5branding-new-01-2.png"
          />
          <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm sm:text-base lg:text-xl tracking-[-0.50px] leading-relaxed">
            At SG5.ai, we specialize in delivering innovative AI, ML, data
            engineering, blockchain, and bespoke software solutions that drive
            business success.
          </div>
        </div>

        {/* Navigation + Social Links */}
        <div className="flex flex-col sm:flex-row w-full lg:w-auto justify-between gap-6 sm:gap-8 lg:gap-10">
          {/* Navigation Items */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="cursor-pointer [font-family:'Poppins',Helvetica] font-medium text-lg sm:text-xl md:text-2xl lg:text-[37.7px] tracking-[-0.60px] leading-tight sm:leading-snug lg:leading-[44px] whitespace-nowrap text-white hover:text-[#a1c0ff] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 sm:ml-4 lg:ml-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 group"
              >
                <div className="[font-family:'Inter',Helvetica] font-normal text-base sm:text-lg lg:text-[19.5px] text-white group-hover:text-[#a1c0ff] transition-colors">
                  {link.name}
                </div>
                {link.platform === "fb" && (
                  <Badge className="px-2 sm:px-3 py-1 rounded-2xl [background:linear-gradient(90deg,rgba(51,194,255,1)_0%,rgba(0,119,255,1)_100%)]">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs">
                      New
                    </span>
                  </Badge>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full items-center text-white text-xs sm:text-sm lg:text-base [font-family:'DM_Sans',Helvetica] font-normal tracking-[-0.16px] leading-[20.8px] gap-3 sm:gap-4 lg:gap-0">
        <div className="whitespace-nowrap text-center sm:text-left">
          © 2025 All rights reserved
        </div>
        <div className="flex items-center gap-1 whitespace-nowrap text-xs sm:text-sm lg:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 sm:h-4 sm:w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Dallas, Texas, USA
        </div>
      </div>
    </footer>
  );
};

export default Footer;