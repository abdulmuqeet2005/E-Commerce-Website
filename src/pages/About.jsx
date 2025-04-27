import React from "react";

// import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">About LuxeKart</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover the story behind LuxeKart — your premier destination for luxurious and exclusive products.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              At LuxeKart, our mission is to redefine online luxury shopping by offering the most exclusive, stylish, and
              high-quality products delivered with impeccable service.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              We envision a world where premium shopping is just a click away — where elegance meets convenience and every
              customer feels like a VIP.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
        <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed text-center">
          <p>
            LuxeKart was born out of a desire to offer a curated platform where discerning shoppers can find
            premium products that reflect their lifestyle. With a keen eye for quality and a passion for excellence,
            our team brings together the best from global designers and tech innovators. We’re more than a store —
            we’re a statement of sophistication.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 text-center bg-gradient-to-r from-black to-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-4">Join the Luxe Experience</h2>
        <p className="text-lg mb-6">Ready to elevate your lifestyle?</p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
        {/* <Link to={'Products'}>Explore Products</Link> */}
        <a href="Products">Explore Products</a>
        </button>
      </section>
    </div>
  );
};

export default About;
