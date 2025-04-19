
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Trash2, ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Separator } from '@/components/ui/separator';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-apollo-muted py-12">
          <div className="apollo-container">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Cart</h1>
            <p className="text-gray-600">Review and update your items</p>
          </div>
        </div>
        
        <div className="py-12">
          <div className="apollo-container">
            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>
                      
                      <div className="space-y-6">
                        {cartItems.map((item) => {
                          const { product, quantity } = item;
                          const price = product.discountedPrice || product.price;
                          const subtotal = price * quantity;
                          
                          return (
                            <div key={product.id} className="flex flex-col sm:flex-row border-b border-gray-200 pb-6">
                              <div className="w-full sm:w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-full object-cover rounded"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://placehold.co/200x200/e3f2fd/1e88e5?text=${product.name}`;
                                  }}
                                />
                              </div>
                              
                              <div className="flex-grow sm:ml-6">
                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                  <div>
                                    <h3 className="font-medium text-gray-800">
                                      <Link to={`/products/${product.id}`} className="hover:text-apollo-DEFAULT">
                                        {product.name}
                                      </Link>
                                    </h3>
                                    <p className="text-sm text-gray-500">{product.generic}</p>
                                    {product.requiresPrescription && (
                                      <span className="text-xs bg-apollo-muted text-gray-700 px-2 py-1 rounded mt-1 inline-block">
                                        Prescription Required
                                      </span>
                                    )}
                                  </div>
                                  
                                  <div className="mt-3 sm:mt-0 text-right">
                                    <p className="font-medium text-apollo-DEFAULT">₹{price.toFixed(2)}</p>
                                    <p className="text-sm text-gray-600">Subtotal: ₹{subtotal.toFixed(2)}</p>
                                  </div>
                                </div>
                                
                                <div className="flex justify-between items-center mt-4">
                                  <div className="flex items-center border border-gray-300 rounded-md">
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      onClick={() => updateQuantity(product.id, quantity - 1)}
                                      className="text-gray-600 hover:text-apollo-DEFAULT"
                                    >
                                      <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="w-10 text-center">{quantity}</span>
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      onClick={() => updateQuantity(product.id, quantity + 1)}
                                      className="text-gray-600 hover:text-apollo-DEFAULT"
                                    >
                                      <Plus className="h-4 w-4" />
                                    </Button>
                                  </div>
                                  
                                  <Button 
                                    variant="ghost" 
                                    onClick={() => removeFromCart(product.id)}
                                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                  >
                                    <Trash2 className="h-4 w-4 mr-1" /> Remove
                                  </Button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium">₹{getTotalPrice().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Fee</span>
                          <span className="font-medium">₹40.00</span>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-apollo-DEFAULT">₹{(getTotalPrice() + 40).toFixed(2)}</span>
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-2">
                          Delivery available only within Cuddalore
                        </p>
                      </div>
                      
                      <div className="mt-6">
                        <Link to="/checkout">
                          <Button className="w-full bg-apollo-DEFAULT hover:bg-apollo-dark">
                            Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        
                        <Link to="/categories">
                          <Button variant="outline" className="w-full mt-4 border-apollo-DEFAULT text-apollo-DEFAULT">
                            Continue Shopping
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-apollo-muted rounded-full">
                  <ShoppingCart className="h-10 w-10 text-apollo-DEFAULT" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-6">Add medicines to your cart and they will appear here</p>
                <Link to="/categories">
                  <Button className="bg-apollo-DEFAULT hover:bg-apollo-dark">
                    Browse Medicines
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

export default CartPage;
