import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/Product/ProductSlice'; // Ensure these actions exist in your slice.

const Card = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Product.items); // Get items from the store
  const totalPrice = useSelector((state) => state.Product.totalPrice); // Get total price from the store

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // Call remove from cart action
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity === 0) {
      handleRemove(id); // If quantity is 0, remove item from cart
    } else {
      dispatch(updateQuantity({ id, quantity })); // Update quantity of the item
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl text-gray-500">Your cart is empty.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Your Cart</h2>
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded-lg" />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-gray-500">Price: ${item.price}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <button
                    className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
                    onClick={() => handleQuantityChange(item.id, item.qty - 1)}
                  >
                    -
                  </button>
                  <span className="mx-4">{item.qty}</span>
                  <button
                    className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
                    onClick={() => handleQuantityChange(item.id, item.qty + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="font-bold">${item.price * item.qty}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <span className="text-2xl font-bold text-gray-800">Total: ${totalPrice}</span>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
