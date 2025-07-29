import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Link } from "react-router-dom";  

export const FrameWrapperByAnima = () => {
  const navItems = [
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },  // Add path for Services page
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="bg-black w-full mb-0">
      <div className="flex flex-col lg:flex-row items-center md:justify-between px-8 py-4 gap-5">
        <div className="flex-shrink-0">
          <img
            className="h-[50px] md:h-[76px] w-[100px] md:w-[135px] object-cover cursor-pointer"
            alt="Company Logo"
            src="/hh-sg5branding-new-01-2.png"
          />
        </div>

        <NavigationMenu className="flex-grow flex justify-center flex-wrap">
          <NavigationMenuList className="flex gap-3 md:gap-10">
            {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
            <NavigationMenuLink as="a" href={item.path} className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-xl hover:text-[#a1c0ff] transition-colors cursor-pointer">
              {item.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
          
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="relative flex-shrink-0">
          {/* <div className="absolute w-[9px] h-[47px] top-0 left-[-9px] bg-[#613fe7]" /> */}
          <Button className="w-[163px] h-[47px] bg-[#a1c0ff] rounded-[58px] border border-solid border-[#393b43] text-black hover:bg-black hover:text-[#a1c0ff] transition-colors">
            <span className="[font-family:'Inter',Helvetica] font-medium text-base mr-2">
              Learn more
            </span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
