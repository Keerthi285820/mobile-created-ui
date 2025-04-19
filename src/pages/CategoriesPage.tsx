
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import CategoryCard from '@/components/Products/CategoryCard';
import { categories } from '@/data/categories';

const CategoriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-apollo-muted py-12">
          <div className="apollo-container">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Browse Categories</h1>
            <p className="text-gray-600">Find medicines by category</p>
          </div>
        </div>
        
        <div className="py-12">
          <div className="apollo-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
