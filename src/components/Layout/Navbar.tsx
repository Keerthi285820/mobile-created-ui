
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="apollo-container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-apollo-DEFAULT flex items-center justify-center text-white font-bold text-xl">A</div>
            <span className="text-xl font-semibold text-apollo-dark hidden sm:inline-block">Apollo Pharmacy</span>
          </Link>
          
          {/* Search - hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search medicines..."
                className="pl-10 pr-4 py-2 w-full bg-gray-50"
              />
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-apollo-DEFAULT font-medium">Home</Link>
            <Link to="/categories" className="text-gray-700 hover:text-apollo-DEFAULT font-medium">Categories</Link>
            <Link to="/about" className="text-gray-700 hover:text-apollo-DEFAULT font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-apollo-DEFAULT font-medium">Contact</Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" className="p-2">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-apollo-accent text-white px-1.5 py-0.5 rounded-full text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link to="/cart" className="relative mr-2">
              <Button variant="ghost" size="sm" className="p-1.5">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-apollo-accent text-white px-1.5 py-0.5 rounded-full text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3">
            <div className="flex items-center mb-4">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search medicines..."
                  className="pl-10 pr-4 py-2 w-full bg-gray-50"
                />
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-apollo-DEFAULT font-medium py-2 border-b border-gray-100">Home</Link>
              <Link to="/categories" className="text-gray-700 hover:text-apollo-DEFAULT font-medium py-2 border-b border-gray-100">Categories</Link>
              <Link to="/about" className="text-gray-700 hover:text-apollo-DEFAULT font-medium py-2 border-b border-gray-100">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-apollo-DEFAULT font-medium py-2">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
