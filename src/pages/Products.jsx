import React from 'react';
import { motion } from 'framer-motion';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/Product/ProductSlice';

const Products = () => {
  const navigate = useNavigate();
  const [loading, error, data] = useFetch('https://fakestoreapi.com/products');
  // const count = useSelector((state) => state.Product.value)
  const dispatch = useDispatch()

  if (loading) {
    return (
      <div className="flex justify-center my-20">
        <span className="loading loading-dots loading-xl text-center"></span>
      </div>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-3xl font-bold text-red-600 mt-20">
        Something went wrong 😞
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Exclusive Products</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white border rounded-2xl shadow-lg p-4 w-64 text-center transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-lg mb-2 text-black">
                {item.title.split(' ').slice(0, 3).join(' ')}
              </h2>
              <img
                src={item.image}
                alt={item.title}
                className="w-36 h-36 object-contain mx-auto my-4 transition-transform duration-300 hover:scale-105"
              />
              <p className="text-gray-600 text-sm mb-4">
                {item.description.split(' ').slice(0, 6).join(' ')}...
              </p>
              <span className="text-lg font-semibold text-gray-800 block mb-4">
                Price ${item.price}
              </span>
            </div>

            <div className="flex justify-between items-center gap-2 mt-auto">
              <button
                className="bg-black text-white px-3 py-2 rounded-full font-semibold hover:bg-gray-800 transition w-1/2"
                onClick={() => navigate(`/Products/${item.id}`)} // ✅ Corrected path here
              >
                See more
              </button>
              <button className="bg-black text-white px-3 py-2 rounded-full font-semibold hover:bg-gray-800 transition w-1/2"
              onClick={() =>
                dispatch(addToCart({
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price
                }))
              }>
               Add Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
