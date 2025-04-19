
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-apollo-muted to-apollo-light overflow-hidden">
      <div className="apollo-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apollo-dark mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Cuddalore's most trusted pharmacy with a wide range of medicines delivered with care. 
              Now available online for your convenience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-apollo-DEFAULT hover:bg-apollo-dark">
                <Link to="/categories" className="flex items-center">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-apollo-DEFAULT text-apollo-DEFAULT hover:bg-apollo-muted">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-apollo-accent/20 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <img 
                src="/images/pharmacy-hero.jpg" 
                alt="Apollo Pharmacy" 
                className="rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/e3f2fd/1e88e5?text=Apollo+Pharmacy";
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
