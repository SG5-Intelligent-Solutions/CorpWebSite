import { useState } from "react";
import { ChevronRightIcon, Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "About Us", path: "/about-us" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "Industries", path: "/industries" },
        { name: "Contact Us", path: "/contact-us" },
    ];

    return (
        <header className="w-full sticky top-0 z-50 flex justify-center p-2 sm:p-4">
            {/* Desktop Header */}
            <div className="hidden sm:block w-[95%] rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 gap-3 sm:gap-4 lg:gap-5">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            className="h-[40px] sm:h-[50px] lg:h-[60px] w-[80px] sm:w-[100px] lg:w-[120px] object-cover cursor-pointer"
                            alt="Company Logo"
                            src="/hh-sg5branding-new-01-2.png"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="flex-grow flex justify-center order-3 sm:order-2 w-full sm:w-auto">
                        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-xs sm:text-sm lg:text-lg xl:text-xl hover:text-[#a1c0ff] transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA Button */}
                    <div className="relative flex-shrink-0 order-2 sm:order-3">
                        <Button
                            onClick={() => navigate("/contact-us")}
                            className="w-[140px] sm:w-[150px] lg:w-[163px] h-[38px] sm:h-[42px] lg:h-[47px] bg-[#a1c0ff] rounded-[58px] border border-solid border-[#393b43] text-black hover:bg-black hover:text-[#a1c0ff] transition-colors"
                        >
                            <span className="[font-family:'Inter',Helvetica] font-medium text-sm sm:text-base mr-1 sm:mr-2">
                                Learn more
                            </span>
                            <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="block sm:hidden w-full">
                <div className="backdrop-blur-2xl bg-white/10 border-b border-gray-800 rounded-xl px-4 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            className="h-[36px] w-[80px] object-contain cursor-pointer"
                            alt="Company Logo"
                            src="/hh-sg5branding-new-01-2.png"
                        />
                    </Link>

                    {/* Hamburger */}
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="w-7 h-7 transition-transform duration-300" />
                        ) : (
                            <Menu className="w-7 h-7 transition-transform duration-300" />
                        )}
                    </button>
                </div>

                {/* Slide-in Navigation */}
                <div
                    className={`fixed top-0 right-0 h-full w-3/4 bg-white/10 backdrop-blur-2xl border-l border-gray-800 shadow-2xl transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full px-6 py-6 space-y-6">
                        {/* Close Button */}
                        <button
                            className="self-end text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-7 h-7" />
                        </button>

                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-5">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-lg font-semibold tracking-wide hover:text-[#a1c0ff] transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="mt-auto">
                            <Button
                                onClick={() => {
                                    setIsOpen(false);
                                    navigate("/contact-us");
                                }}
                                className="w-full h-[45px] bg-[#a1c0ff] rounded-[58px] border border-solid border-[#393b43] text-black hover:bg-black hover:text-[#a1c0ff] transition-all"
                            >
                                <span className="font-medium text-base mr-2">Learn more</span>
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
