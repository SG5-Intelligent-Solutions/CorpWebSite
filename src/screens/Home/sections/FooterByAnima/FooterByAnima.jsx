import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const FooterByAnima = () => {
  const navigationItems = [
    { title: "About" },
    { title: "Services" },
    { title: "Products" },
    { title: "Industries" },
    { title: "Contact Us" },
  ];

 

  const socialLinks = [
    { name: "LinkedIn" },
    { name: "Instagram" },
    { name: "Facebook", platform: 'fb' },
  ];

  return (
    <footer className="flex flex-col gap-10 lg:gap-32 w-full items-center p-10 lg:p-24 bg-transparent [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(119,140,183,1)_100%)]">
    <div className="flex flex-col lg:flex-row w-full justify-between gap-10 lg:gap-32">
  {/* Logo and Description */}
  <div className="w-full lg:w-1/3 flex flex-col gap-4">
    <img
      className="w-[135px] h-[76px] object-cover"
      alt="SG5.ai logo"
      src="/hh-sg5branding-new-01-2.png"
    />
    <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[-0.50px] leading-8">
      At SG5.ai, we specialize in delivering innovative AI, ML, data
      engineering, blockchain, and bespoke software solutions that drive
      business success.
    </div>
  </div>

  {/* Navigation + Social Links */}
  <div className="flex flex-col lg:flex-row w-full justify-between gap-10">
    {/* Navigation Items */}
    <div className="flex flex-col gap-5 ml-36">
      {navigationItems.map((item) => (
        <div
          key={item.title}
          className="cursor-pointer [font-family:'Poppins',Helvetica] font-medium text-[37.7px] tracking-[-0.60px] leading-[44px] whitespace-nowrap text-white"
        >
          {item.title}
        </div>
      ))}
    </div>

    {/* Social Links */}
    <div className="flex flex-col gap-5 ml-6">
      {socialLinks.map((link) => (
        <div key={link.name} className="flex items-center gap-3">
          <div className="[font-family:'Inter',Helvetica] font-normal text-[19.5px] text-white">
            {link.name}
          </div>
          {link.platform === "fb" && (
            <Badge className="px-3 py-1 rounded-2xl [background:linear-gradient(90deg,rgba(51,194,255,1)_0%,rgba(0,119,255,1)_100%)]">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs">
                New
              </span>
            </Badge>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

<div className="flex justify-between w-full items-center text-white text-base [font-family:'DM_Sans',Helvetica] font-normal tracking-[-0.16px] leading-[20.8px]">
  <div className="whitespace-nowrap">© 2025 All rights reserved</div>
  <div className="flex items-center gap-1 whitespace-nowrap">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-white"
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    Dallas, Texas, USA
  </div>
</div>

    </footer>
  );
};
