
import React from 'react';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Prescription Delivery",
    description: "Upload your prescription and get medicines delivered to your doorstep in Cuddalore.",
    icon: "medication"
  },
  {
    id: 2,
    title: "24/7 Support",
    description: "Our pharmacists are available around the clock to answer your queries.",
    icon: "phone"
  },
  {
    id: 3,
    title: "Genuine Medicines",
    description: "We source medicines directly from manufacturers to ensure authenticity.",
    icon: "check"
  },
  {
    id: 4,
    title: "Cuddalore Delivery",
    description: "Fast and reliable delivery within Cuddalore city limits.",
    icon: "map-pin"
  }
];

const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="apollo-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-2">Delivering quality healthcare services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-apollo-muted rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-apollo-DEFAULT rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
