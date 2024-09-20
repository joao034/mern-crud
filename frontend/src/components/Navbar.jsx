import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to='/' className="text-lg text-gray-800 font-semibold hover:text-blue-600">My Store</Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link className="text-gray-800 hover:text-blue-600" to='create'>Create</Link>
            
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to='create'>Create</Link>
        </div>
      )}
    </nav>
  );
};

