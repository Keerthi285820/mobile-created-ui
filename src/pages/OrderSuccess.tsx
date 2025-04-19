
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="apollo-container py-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
          <p className="text-xl text-gray-600 mb-6">Thank you for shopping with Apollo Pharmacy</p>
          <p className="text-gray-600 max-w-lg mx-auto mb-8">
            Your order has been received and is being processed. You will receive an SMS with your order details shortly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button className="bg-apollo-DEFAULT hover:bg-apollo-dark">
                Back to Home
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline" className="border-apollo-DEFAULT text-apollo-DEFAULT">
                Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-apollo-muted rounded-lg max-w-lg mx-auto">
            <h3 className="font-semibold text-lg mb-4">Order Information</h3>
            <div className="space-y-2 text-left">
              <p className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">AP-{Math.floor(100000 + Math.random() * 900000)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-medium">Within 2 hours</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium">Cash on Delivery</span>
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              For any queries regarding your order, please contact us at +91 98765 43210
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
