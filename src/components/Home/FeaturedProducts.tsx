
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Product, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  
  // Get products with discounts for featured section
  const featuredProducts = products
    .filter(product => product.discountedPrice)
    .slice(0, 4);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="apollo-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Special Offers</h2>
          <p className="text-gray-600 mt-2">Save on these featured products</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="product-card h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/400x300/e3f2fd/1e88e5?text=${product.name}`;
                  }}
                />
                {product.discountedPrice && (
                  <Badge className="absolute top-2 right-2 bg-apollo-accent font-medium">
                    {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                  </Badge>
                )}
              </div>
              <CardContent className="p-4 flex-grow">
                <Link to={`/products/${product.id}`} className="block">
                  <h3 className="font-semibold text-lg text-gray-800 hover:text-apollo-DEFAULT">{product.name}</h3>
                </Link>
                <p className="text-gray-500 text-sm mb-2">{product.generic}</p>
                <div className="flex items-baseline mt-2">
                  {product.discountedPrice ? (
                    <>
                      <span className="text-apollo-DEFAULT font-bold">₹{product.discountedPrice}</span>
                      <span className="text-gray-400 line-through ml-2">₹{product.price}</span>
                    </>
                  ) : (
                    <span className="text-apollo-DEFAULT font-bold">₹{product.price}</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full bg-apollo-DEFAULT hover:bg-apollo-dark"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/products" className="text-apollo-DEFAULT hover:text-apollo-dark font-medium">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
