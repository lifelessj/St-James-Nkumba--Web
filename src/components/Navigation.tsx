import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Users, GraduationCap, FileText, Image, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/", icon: BookOpen },
  { name: "About Us", href: "/about", icon: Users },
  { name: "Academics", href: "/academics", icon: GraduationCap },
  { name: "Admissions", href: "/admissions", icon: FileText },
  { name: "Gallery", href: "/gallery", icon: Image },
  { name: "News & Events", href: "/news", icon: Calendar },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-10 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img
            src="src/assets/Logo.png"
            alt="St. James Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-lg font-semibold text-secondary-foreground md:hidden lg:block">
            St. James
          </span>
          <div className="hidden md:block">
            <div className="text-lg font-bold text-primary text-red-400">St. James Nkumba</div>
            <div className="text-xs text-muted-foreground">Primary School</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-primary-light/50",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center px-3 py-3 text-sm font-medium rounded-md transition-all duration-200",
                      isActive
                        ? "bg-orange-500 text-white-foreground"
                        : "text-foreground hover:bg-orange-100 hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav >
  );
}