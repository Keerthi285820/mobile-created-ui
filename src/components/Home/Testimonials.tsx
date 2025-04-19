
import React from 'react';

const testimonials = [
  {
    id: 1,
    content: "Apollo Pharmacy has been my trusted healthcare partner for years. Their online ordering system makes it so convenient to get my regular medicines delivered at home in Cuddalore.",
    author: "Ramesh Kumar",
    role: "Regular Customer"
  },
  {
    id: 2,
    content: "The quality of medicines and the service provided by Apollo Pharmacy is exceptional. Their pharmacists are knowledgeable and always ready to help.",
    author: "Priya Sharma",
    role: "Customer since 2019"
  },
  {
    id: 3,
    content: "I appreciate the timely delivery and the authenticity of products from Apollo Pharmacy. Being able to order online has made managing my family's healthcare needs much easier.",
    author: "Dr. Sanjay Mehta",
    role: "Local Physician"
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-apollo-dark to-apollo-DEFAULT text-white">
      <div className="apollo-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <p className="mt-2 text-gray-200">Trusted by thousands of customers in Cuddalore</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-gray-100 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-apollo-DEFAULT rounded-full flex items-center justify-center text-white">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
