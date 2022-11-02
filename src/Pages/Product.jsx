import React, { useEffect } from "react";
import { add } from "../store/cartSlice";
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
const Product = () => {
  //_______________________________States Decalartions😗
  const dispatch = useDispatch();
  const {data: products, status} = useSelector((state) => state.product)

  // ______________________________Functions😗
  // eslint-disable-next-line
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  //_________________________________Conditions😊
  if (status === STATUSES.LOADING) {
    return(
      <Loader/>
    )
  }
if (status === STATUSES.ERROR) {
  return(
    <h1 className="text-red-600 mt-10 text-center font-semibold text-xl">Something went wrong.</h1>
  )
}

  //________________________________cmpnt Retrun😃         
  return (
    <>
      <div className="px-8">
        <h1 className="lg:text-2xl font-medium my-4 ">Products</h1>
        <div className="wraper grid grid-cols-1 md:grid md:grid-cols-3 lg:grid-cols-4 lg:grid  gap-8 items-center">
          {products.map((products, index) => (
            <>
              <div
                className="dumy flex flex-col shadow-xl hover:shadow-2xl duration-300 rounded-md p-6 cursor-pointer justify-center "
                key={products.id}
              >
                <img className="h-44" src={products.images} alt="" />

                <h1 className="text-sm font-semibold my-2 ">
                  {products.title}
                </h1>
                <p className="text-base text-gray-700">${products.price}/-</p>
                <button
                  onClick={() => handleAdd(products)}
                  className="px-4 py-2 rounded-md text-white hover:bg-slate-700 duration-300 bg-slate-500 cursor-pointer my-1"
                >
                  Add to Cart
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
