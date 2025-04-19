
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { getProductById } from '@/data/products';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { ShoppingCart, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = productId ? getProductById(productId) : undefined;
  const category = product ? categories.find(cat => cat.id === product.categoryId) : undefined;
  
  if (!product || !category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
            <Link to="/categories">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Browse Categories
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-apollo-muted py-6">
          <div className="apollo-container">
            <div className="flex items-center mb-4">
              <Link to="/categories" className="text-apollo-DEFAULT hover:text-apollo-dark mr-2">
                Categories
              </Link>
              <span className="text-gray-500">/</span>
              <Link to={`/categories/${category.id}`} className="mx-2 text-apollo-DEFAULT hover:text-apollo-dark">
                {category.name}
              </Link>
              <span className="text-gray-500">/</span>
              <span className="ml-2 text-gray-600">{product.name}</span>
            </div>
          </div>
        </div>
        
        <div className="py-12">
          <div className="apollo-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/600x400/e3f2fd/1e88e5?text=${product.name}`;
                    }}
                  />
                  {product.discountedPrice && (
                    <Badge className="absolute top-4 right-4 bg-apollo-accent font-medium text-sm px-3 py-1">
                      {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                    </Badge>
                  )}
                  {product.requiresPrescription && (
                    <Badge className="absolute top-4 left-4 bg-apollo-DEFAULT/90 font-medium text-sm px-3 py-1">
                      Prescription Required
                    </Badge>
                  )}
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.generic}</p>
                
                <div className="flex items-baseline mb-6">
                  {product.discountedPrice ? (
                    <>
                      <span className="text-2xl text-apollo-DEFAULT font-bold">₹{product.discountedPrice}</span>
                      <span className="text-gray-400 line-through ml-3 text-lg">₹{product.price}</span>
                    </>
                  ) : (
                    <span className="text-2xl text-apollo-DEFAULT font-bold">₹{product.price}</span>
                  )}
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                
                <Card className="mb-6">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Manufacturer</p>
                        <p className="font-medium">{product.manufacturer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Dosage</p>
                        <p className="font-medium">{product.dosage}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Stock</p>
                        <p className="font-medium">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-medium">{category.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center border border-gray-300 rounded-md mr-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={decreaseQuantity}
                      className="text-gray-600 hover:text-apollo-DEFAULT"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={increaseQuantity}
                      className="text-gray-600 hover:text-apollo-DEFAULT"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    className="bg-apollo-DEFAULT hover:bg-apollo-dark flex-grow"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>
                </div>
                
                {product.requiresPrescription && (
                  <div className="bg-apollo-muted p-4 rounded-md">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> This medicine requires a valid prescription. You will need to upload a prescription during checkout.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
