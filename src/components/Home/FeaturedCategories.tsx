
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category, categories } from '@/data/categories';

const FeaturedCategories = () => {
  // Get a subset of categories to display
  const featuredCategories = categories.slice(0, 4);
  
  return (
    <section className="py-12 bg-white">
      <div className="apollo-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
          <p className="text-gray-600 mt-2">Browse our wide range of pharmaceutical products</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <Link to={`/categories/${category.id}`} key={category.id}>
              <Card className="category-card h-full overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/400x300/e3f2fd/1e88e5?text=${category.name}`;
                    }}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">{category.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/categories" className="text-apollo-DEFAULT hover:text-apollo-dark font-medium">
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
