import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCards from "../components/CartCards";
import { useNavigate } from "react-router-dom";
import { deleteCart } from "../redux/cart";

const Cart = () => {
  const { cartArray } = useSelector((state) => state.shoppingCart);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const removeAll = () => {
    dispatch(deleteCart(cartArray));
    window.location.reload();
  };

  return (
    <div className="lg:p-10">
      {cartArray?.map(({ img, title, description, price }, index) => (
        <CartCards
          img={img}
          title={title}
          description={description}
          index={index}
          price={price}
        />
      ))}

      {cartArray.length > 0 ? (
        <div className="flex flex-wrap justify-center mt-10">
          <button
            className="bg-yellow-600 text-white text-normal w-full sm:w-1/2 md:w-1/5 p-2 rounded mb-2 sm:mb-0"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
          <button
            className="bg-red-600 text-white text-normal w-full sm:w-1/2 md:w-1/5 p-2 rounded"
            onClick={removeAll}
          >
            Remove all
          </button>
        </div>
      ) : (
        <h1>nothing to display</h1>
      )}
    </div>
  );
};

export default Cart;
