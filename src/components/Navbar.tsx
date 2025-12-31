import { Car, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto glass-strong rounded-2xl px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground text-lg">AutoGenAI</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#workflow" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Workflow
            </a>
            <a href="#simulation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Simulation
            </a>
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="default" size="sm">Get Started</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-3">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
                Features
              </a>
              <a href="#workflow" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
                Workflow
              </a>
              <a href="#simulation" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
                Simulation
              </a>
              <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
                Documentation
              </a>
              <div className="flex gap-3 pt-3">
                <Button variant="ghost" size="sm" className="flex-1">Sign In</Button>
                <Button variant="default" size="sm" className="flex-1">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
