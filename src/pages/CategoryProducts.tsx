
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import ProductCard from '@/components/Products/ProductCard';
import { getProductsByCategoryId } from '@/data/products';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CategoryProducts = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = categories.find(cat => cat.id === categoryId);
  const products = categoryId ? getProductsByCategoryId(categoryId) : [];
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h2>
            <Link to="/categories">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-apollo-muted py-12">
          <div className="apollo-container">
            <div className="flex items-center mb-4">
              <Link to="/categories" className="text-apollo-DEFAULT hover:text-apollo-dark mr-2">
                <span className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Categories
                </span>
              </Link>
              <span className="text-gray-500">/</span>
              <span className="ml-2 text-gray-600">{category.name}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h1>
            <p className="text-gray-600">{category.description}</p>
          </div>
        </div>
        
        <div className="py-12">
          <div className="apollo-container">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">No products found in this category</h2>
                <p className="text-gray-500 mb-4">Check back later or browse other categories</p>
                <Link to="/categories">
                  <Button className="bg-apollo-DEFAULT hover:bg-apollo-dark">
                    Browse Categories
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryProducts;
