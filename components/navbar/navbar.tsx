"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  subItems?: Array<{ name: string; href: string }>;
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/programs",
    subItems: [{ name: "Curriculum", href: "/programs/curriculum" }],
  },
  { name: "Admission", href: "/admission" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavigation = (href: string) => {
    router.push(href);
    setOpenDropdown(null);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subItems ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive(link.href)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name
                        )
                      }
                      aria-expanded={openDropdown === link.name}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground",
                              isActive(subItem.href) &&
                                "bg-accent text-accent-foreground"
                            )}
                            onClick={() => handleNavigation(subItem.href)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                    onClick={() => handleNavigation(link.href)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-3">
                {navLinks.map((link) =>
                  link.subItems ? (
                    <div key={link.name} className="space-y-3">
                      <button
                        className="flex items-center justify-between w-full text-left font-medium text-foreground"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.name ? null : link.name
                          )
                        }
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openDropdown === link.name && "rotate-180"
                          )}
                        />
                      </button>
                      {openDropdown === link.name && (
                        <div className="pl-4 space-y-2">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block py-2 px-4 text-sm hover:bg-accent rounded-md transition-colors",
                                isActive(subItem.href) &&
                                  "bg-accent text-accent-foreground"
                              )}
                              onClick={() => handleNavigation(subItem.href)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "block py-2 px-4 text-sm hover:bg-accent rounded-md transition-colors",
                        isActive(link.href) &&
                          "bg-accent text-accent-foreground"
                      )}
                      onClick={() => handleNavigation(link.href)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
