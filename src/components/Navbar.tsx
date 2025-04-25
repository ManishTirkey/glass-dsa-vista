
import React from 'react';
import { Search, Home, Book } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full glass flex items-center justify-center">
              <Book className="h-5 w-5 text-primary" />
            </div>
            <span className="font-semibold text-lg text-gradient hidden sm:block">GlassDSA</span>
          </Link>
        </div>

        <div className="hidden md:flex glass relative rounded-full px-3 py-1 max-w-md w-full">
          <Search className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
          <Input 
            placeholder="Search questions..." 
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 pl-8"
          />
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
            <Home className="h-5 w-5" />
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full">
            Add Question
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
