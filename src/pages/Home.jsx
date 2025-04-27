import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to LuxeKart</h1>
        <p className="text-xl mb-8">Experience luxury shopping like never before</p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          <Link to={'/products'}>Shop Now</Link>
        </button>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Luxury Watch",
              image: "https://images.unsplash.com/photo-1588776814546-ec7e25b79e63", // sleek watch
            },
            {
              name: "Designer Bag",
              image: "https://images.unsplash.com/photo-1618354691373-4a4e750c78cd", // luxury handbag
            },
            {
              name: "Premium Sneakers",
              image: "https://images.unsplash.com/photo-1600180758890-6ec2f729c509", // stylish sneakers
            },
            {
              name: "Smart Tech",
              image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // smart gadget
            },
          ].map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={`${product.image}?auto=format&fit=crop&w=600&q=80`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">$199.99</p>
                <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                  <Link to={'/products'}>Buy Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Best shopping experience!", "Top-notch quality.", "Fast delivery & great support."].map((review, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
              <p className="text-gray-700 mb-4 italic">"{review}"</p>
              <h4 className="font-semibold text-gray-900">Customer {index + 1}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
