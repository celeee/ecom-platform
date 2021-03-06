import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ProductItem({ product, addToCart, isItemInCart }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="w-full relative group overflow-hidden">
      <div
        className="flex flex-col items-center border border-gray-dark rounded cursor-pointer"
        onClick={() => navigate(`/product/${product.productId}`)}
      >
        <div className="w-full relative">
          <div
            className="w-full h-52 bg-center bg-no-repeat bg-contain border-b"
            style={{
              backgroundImage: `url(/assets/images/products/${product.name
                .split(' ')
                .join('')}/image-1.png)`,
            }}
          >
            <span className="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full uppercase font-bold text-green-500">
              New
            </span>
          </div>
        </div>

        <div className="w-full px-6 py-6 transform group-hover:-translate-y-4 transition-all duration-300 ease-in-out">
          <h3 className="text-xl text-gray-500">{product.name}</h3>
          <span className="font-bold text-xl block pt-1">${product.price}</span>
          <span
            className={`pt-4 font-bold ${
              product.active ? 'text-green-500' : 'text-red-500'
            } block`}
          >
            {product.active ? 'In Stock' : 'Out of stock'}
          </span>
          <p className="text-gray-500 pt-2 text-sm truncate">
            {product.description}
          </p>
          <div className="flex items-center pt-2">
            <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <p className="text-sm ml-2">45</p>
          </div>
        </div>
      </div>

      <button
        className="bg-yellow-500 w-full block py-2 absolute -bottom-full group-hover:bottom-0 hover:bg-yellow-600 text-white transition-all duration-300 ease-in-out"
        onClick={handleAddToCart}
      >
        {isItemInCart(product.productId) ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductItem;
