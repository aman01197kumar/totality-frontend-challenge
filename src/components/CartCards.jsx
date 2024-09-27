import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { calculateAmount, removeCartItem } from "../redux/cart";

const CartCards = ({ img, title, description, index, price }) => {
  const [propertyCount, setPropertyCount] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [totalPrice, setTotalPrice] = useState(price);
  const dispatch = useDispatch();
  const {totalAmount} = useSelector(state=>state.shoppingCart)

  const increaseProperties = () => {
    setPropertyCount((prev) => prev + 1);
    setIsDisabled(false);
  };

  const decreaseProperties = () => {
    setPropertyCount((prev) => {
      const newCount = prev > 1 ? prev - 1 : 1;
      setIsDisabled(newCount === 1);
      return newCount;
    });
  };

  useEffect(() => {
    const totalpropPrice = propertyCount * price;
    setTotalPrice(totalpropPrice);
    dispatch(calculateAmount(totalPrice));
  }, [propertyCount]);

  const removePropertyHandler = (id) => {
    dispatch(removeCartItem(id));
  };
  return (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{description}</AccordionDetails>
      <div>
        <div>
          <h1>Price per Property</h1>
          <p>100000</p>
        </div>
        <div>
          <h1>
            Price for <span>{propertyCount}</span>{" "}
            {propertyCount === 1 ? "unit" : "units"}
          </h1>
          <p>{totalPrice}</p>{" "}
        </div>
      </div>
      <AccordionActions>
        <button
          className="bg-green-300 text-white lg:text-lg w-1/5 p-1 lg:font-bold rounded"
          onClick={increaseProperties}
        >
          Increase Property
        </button>
        <button
          className={`${
            isDisabled ? "bg-gray-600" : "bg-orange-600"
          } text-white lg:text-lg w-1/5 p-1 lg:font-bold rounded`}
          onClick={decreaseProperties}
          disabled={isDisabled}
        >
          Decrease Property
        </button>
        <button
          className="bg-yellow-600 text-white lg:text-lg w-1/5 p-1 lg:font-bold rounded"
          onClick={() => removePropertyHandler(index)}
        >
          Remove Property
        </button>
      </AccordionActions>
    </Accordion>
  );
};

export default CartCards;
