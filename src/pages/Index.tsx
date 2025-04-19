
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Home/Hero';
import FeaturedCategories from '@/components/Home/FeaturedCategories';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import Services from '@/components/Home/Services';
import Testimonials from '@/components/Home/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
