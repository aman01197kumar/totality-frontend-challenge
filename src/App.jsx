import React, { Fragment } from "react";
import Home from "./screens/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Cart from "./screens/Cart";
import CheckoutCart from "./screens/CheckoutCart";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckoutCart />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
9695347023