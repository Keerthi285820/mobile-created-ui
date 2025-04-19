
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0 && Number(val) < 120, {
    message: "Age must be a valid number between 1 and 120.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  city: z.string().min(2, {
    message: "City is required.",
  }),
  pincode: z.string().regex(/^[0-9]{6}$/, {
    message: "Pincode must be 6 digits.",
  }),
  paymentMethod: z.enum(["cod", "online"]),
});

const CheckoutPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      phone: "",
      email: "",
      address: "",
      city: "Cuddalore",
      pincode: "",
      paymentMethod: "cod",
    },
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.city.toLowerCase() !== "cuddalore") {
      toast.error("We only deliver within Cuddalore city limits");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      toast.success("Order placed successfully!");
      navigate("/order-success");
    }, 1500);
  };
  
  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-apollo-muted py-12">
          <div className="apollo-container">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Checkout</h1>
            <p className="text-gray-600">Please fill in your details to complete your order</p>
          </div>
        </div>
        
        <div className="py-12">
          <div className="apollo-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Age</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your age" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="md:col-span-2">
                            <FormField
                              control={form.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Address</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="Enter your full address"
                                      className="min-h-[100px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="City" 
                                    readOnly
                                    className="bg-gray-100" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                                <p className="text-xs text-gray-500">We only deliver within Cuddalore</p>
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="pincode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pincode</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter 6-digit pincode" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="font-medium text-lg mb-4">Payment Method</h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="payment-cod"
                                value="cod"
                                checked={form.watch('paymentMethod') === 'cod'}
                                onChange={() => form.setValue('paymentMethod', 'cod')}
                                className="h-4 w-4 text-apollo-DEFAULT"
                              />
                              <label htmlFor="payment-cod" className="ml-2">Cash on Delivery</label>
                            </div>
                            
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="payment-online"
                                value="online"
                                checked={form.watch('paymentMethod') === 'online'}
                                onChange={() => form.setValue('paymentMethod', 'online')}
                                className="h-4 w-4 text-apollo-DEFAULT"
                              />
                              <label htmlFor="payment-online" className="ml-2">Online Payment (Card/UPI)</label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="w-full bg-apollo-DEFAULT hover:bg-apollo-dark"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Processing...' : 'Place Order'}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cartItems.map((item) => {
                        const { product, quantity } = item;
                        const price = product.discountedPrice || product.price;
                        
                        return (
                          <div key={product.id} className="flex justify-between">
                            <div>
                              <p className="font-medium text-gray-800">{product.name}</p>
                              <p className="text-sm text-gray-500">Qty: {quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">₹{(price * quantity).toFixed(2)}</p>
                            </div>
                          </div>
                        );
                      })}
                      
                      <Separator />
                      
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
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6 bg-apollo-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Important Notes:</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Delivery is available only within Cuddalore city limits.</li>
                    <li>• Prescription is required for certain medicines.</li>
                    <li>• Delivery typically takes 1-2 hours during business hours.</li>
                    <li>• For any assistance, call our helpline: +91 98765 43210</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
