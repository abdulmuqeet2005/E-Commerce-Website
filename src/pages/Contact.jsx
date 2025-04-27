import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Have questions or want to buy a product? Fill out the form below and we’ll get back to you shortly.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Optional"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Product / Inquiry</label>
            <input
              type="text"
              placeholder="Product name or reason to contact"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
            <textarea
              placeholder="Type your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
