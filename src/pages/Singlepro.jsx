import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/Product/ProductSlice';

const SinglePro = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const count = useSelector((state) => state.Product.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch product:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) return <h1 className="text-center text-2xl py-20">Loading...</h1>;
  if (error) return <h1 className="text-center text-2xl text-red-500 py-20">Error loading product.</h1>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white shadow-2xl rounded-3xl p-8">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-96 object-contain rounded-xl border shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>

          <div className="flex items-center space-x-3 text-2xl">
            <span className="text-green-600 font-bold">${product.price}</span>
            <span className="text-sm text-gray-500 line-through">${(product.price * 1.25).toFixed(2)}</span>
            <span className="text-sm text-red-500">25% Off</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="text-yellow-400 text-xl">⭐ {product.rating?.rate}</div>
            <span className="text-gray-600 text-sm">({product.rating?.count} Reviews)</span>
          </div>

          <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>

          <div className="space-y-1 text-sm text-gray-600">
            <p><strong>Availability:</strong> In Stock</p>
            <p><strong>Shipping:</strong> Free shipping in 3-5 days</p>
            <p><strong>Warranty:</strong> 1 Year Warranty</p>
            <p><strong>Return Policy:</strong> 30-day return</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300"
              onClick={() => 
                dispatch(addToCart({
                  id: product.id,
                  title: product.title,
                  image: product.image,
                  price: product.price
                }))
              }>
              Add to Cart
            </button>

            <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              <Link to="/Contact">Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePro;
