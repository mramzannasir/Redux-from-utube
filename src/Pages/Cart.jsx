import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="px-8 ">
      <h1 className="text-3xl  font-semibold my-4">Cart</h1>
      <p className="text-sm text-gray-700">Total add products {items.length}</p>
      <div className="wrapper">
        {items.map((product, index) => {
          return (
            <div className="card my-8 shadow-xl rounded-lg" key={index}>
              <div className="flex flex-col md:flex-row  justify-between items-center my-3 p-3 ">
                {" "}
                <img className="h-16" src={product.images} alt="" />
                <h1>{product.title}</h1>
                <p>Price: {product.price}/-</p>
                <button
                  className="p-2 rounded-md text-stone-100 bg-cyan-800"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
