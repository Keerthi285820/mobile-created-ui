
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-apollo-muted py-12">
          <div className="apollo-container">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">About Apollo Pharmacy</h1>
            <p className="text-gray-600">Your trusted healthcare partner in Cuddalore</p>
          </div>
        </div>
        
        <div className="py-12">
          <div className="apollo-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img
                  src="/images/pharmacy-store.jpg"
                  alt="Apollo Pharmacy Store"
                  className="rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x400/e3f2fd/1e88e5?text=Apollo+Pharmacy+Store";
                  }}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Apollo Pharmacy in Cuddalore has been serving the community for over 15 years, providing high-quality medicines and healthcare products. We are part of the renowned Apollo Healthcare Group, known for its commitment to excellence in healthcare services.
                </p>
                <p className="text-gray-600">
                  Our mission is to ensure that every resident of Cuddalore has access to genuine medicines and professional pharmaceutical care. We take pride in our knowledgeable staff, authentic products, and customer-centric approach.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Apollo Pharmacy?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-apollo-light hover:bg-apollo-muted transition-colors">
                  <div className="w-16 h-16 bg-apollo-DEFAULT rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Genuine Medicines</h3>
                  <p className="text-gray-600">All our medicines are sourced directly from authorized manufacturers to ensure authenticity and potency.</p>
                </div>
                
                <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-apollo-light hover:bg-apollo-muted transition-colors">
                  <div className="w-16 h-16 bg-apollo-DEFAULT rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">We deliver medicines within Cuddalore city limits within 2 hours of ordering during business hours.</p>
                </div>
                
                <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-apollo-light hover:bg-apollo-muted transition-colors">
                  <div className="w-16 h-16 bg-apollo-DEFAULT rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">Our team of qualified pharmacists provides expert advice on medications and healthcare.</p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Dr. Rajesh Kumar", role: "Chief Pharmacist", image: "/images/pharmacist1.jpg" },
                  { name: "Priya Sharma", role: "Store Manager", image: "/images/pharmacist2.jpg" },
                  { name: "Vijay Narayan", role: "Pharmacist", image: "/images/pharmacist3.jpg" },
                  { name: "Anita Desai", role: "Customer Service", image: "/images/pharmacist4.jpg" }
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/300x300/e3f2fd/1e88e5?text=${member.name.charAt(0)}`;
                        }}
                      />
                    </div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-apollo-muted rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Commitment</h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                At Apollo Pharmacy Cuddalore, we are committed to providing the highest quality of pharmaceutical care to our community. We believe in building lasting relationships with our customers based on trust, reliability, and excellent service. Your health is our priority, and we strive to make quality healthcare accessible to everyone in Cuddalore.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
