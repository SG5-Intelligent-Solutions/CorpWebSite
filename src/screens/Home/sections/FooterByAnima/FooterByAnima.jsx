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

  const contactInfo = [
    { icon: <MailIcon className="w-6 h-6" />, text: "info@sg5.ai" },
    { icon: <PhoneIcon className="w-6 h-6" />, text: "+1.469.506.9538" },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      text: "2106 Brentfield Drive, Wylie, 75098, Texas, USA",
      multiline: true,
    },
  ];

  const socialLinks = [
    { name: "LinkedIn" },
    { name: "Instagram" },
    { name: "Facebook", platform: 'fb' },
  ];

  return (
    <footer className="flex flex-col gap-10 lg:gap-32 w-full items-center p-10 lg:p-24 bg-transparent [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(119,140,183,1)_100%)]">
      <div className="flex flex-col lg:flex-row w-full lg:justify-between gap-10">
        <div className="w-ful lg:w-1/3">
          <img
            className="w-[135px] h-[76px] object-cover"
            alt="SG5.ai logo"
            src="/hh-sg5branding-new-01-2.png"
          />
        </div>
        <div className="w-full [font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[-0.50px] leading-8">
          At SG5.ai, we specialize in delivering innovative AI, ML, data
          engineering, blockchain, and bespoke software solutions that drive
          business success.
        </div>

      </div>

      <div className="flex flex-col gap-10 lg:flex-row w-full pb-0 px-0 relative">
        <div className="flex flex-col gap-5 h-full w-full lg:w-1/3">
          {/* Navigation Items */}
          {navigationItems.map((item, index) => (
            <div
              key={item.title}
              className="inline-flex flex-col items-start px-0 cursor-pointer"
              style={{ top: `${index * 60}px` }}
            >
              <div className="[font-family:'Poppins',Helvetica] font-medium text-[37.7px] tracking-[-0.60px] leading-[44px] whitespace-nowrap relative w-fit mt-[-1.00px] text-white">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 items-center"
                style={{ top: `${index * 59}px` }}
              >
                <div className="">{item.icon}</div>
                <div className="inline-flex flex-col items-start">
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[19.5px] tracking-[0] leading-[30px] relative w-fit mt-[-1.00px] text-white">
                    {item.multiline ? (
                      <>
                        {item.text.split(", ").slice(0, -1).join(", ")}, <br />
                        {item.text.split(", ").slice(-1)[0]}
                      </>
                    ) : (
                      item.text
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Social Links */}
          <div className="flex flex-col gap-5">
            {socialLinks.map((link, index) => (
              <div
                key={link.name}
                className="gap-3 flex items-start"
                style={{ top: `${index * 58 - 9 + (index === 2 ? 9 : 0)}px` }}
              >
                <div className="[font-family:'Inter',Helvetica] font-normal text-[19.5px] tracking-[0] leading-[30px] whitespace-nowrap relative w-fit mt-[-1.00px] text-white">
                  {link.name}
                </div>
                {link?.platform === 'fb' && <Badge className="flex items-center justify-centerpx-3 py-1 rounded-2xl [background:linear-gradient(90deg,rgba(51,194,255,1)_0%,rgba(0,119,255,1)_100%)]">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-5 whitespace-nowrap">
                    New
                  </span>
                </Badge>}
              </div>
            ))}
          </div>
        </div>

      </div>
        <div className="text-start w-full [font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.16px] leading-[20.8px] whitespace-nowrap">
          © 2025 All rights reserved
        </div>
    </footer>
  );
};
