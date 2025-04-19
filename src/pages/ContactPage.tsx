
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Your message has been sent successfully!");
    form.reset();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-apollo-muted py-12">
          <div className="apollo-container">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
            <p className="text-gray-600">Get in touch with our team</p>
          </div>
        </div>
        
        <div className="py-12">
          <div className="apollo-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter your message"
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-apollo-DEFAULT hover:bg-apollo-dark">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-apollo-muted p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-apollo-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Store</h3>
                      <p className="text-gray-600">123 Main Street, Cuddalore</p>
                      <p className="text-gray-600">Tamil Nadu, India 607001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-apollo-muted p-3 rounded-full">
                      <Phone className="h-6 w-6 text-apollo-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-apollo-muted p-3 rounded-full">
                      <Mail className="h-6 w-6 text-apollo-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">info@apollocuddalore.com</p>
                      <p className="text-gray-600">support@apollocuddalore.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-apollo-muted p-3 rounded-full">
                      <Clock className="h-6 w-6 text-apollo-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 8AM - 10PM</p>
                      <p className="text-gray-600">Sunday: 9AM - 8PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden h-80 shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62770.86822388496!2d79.71781!3d11.757752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a549753e7a0e751%3A0x9f1028f27bcc7165!2sCuddalore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1675689554954!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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

export default ContactPage;
