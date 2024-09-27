import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { propertyCardData } from "../assets/data/propertyCardData";
import { useDispatch, useSelector } from "react-redux";
import { pushArray } from "../redux/cart";

const PropertyCards = ({ id, imgs, title, description, price }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const totalPrice = useSelector((state) => state.shoppingCart.totalAmount);

  const dispatch = useDispatch();

  const handleBookNow = (index) => {
    const propertyData = {
      index: index,
      img: propertyCardData[index]?.imgs[0],
      title: propertyCardData[index]?.title,
      description: propertyCardData[index]?.description,
      price: propertyCardData[index]?.price,
      totalPrice: totalPrice,
    };
    dispatch(pushArray(propertyData));
    setIsDisabled(true);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Carousel className="duration-500 ease-in-out">
        {imgs.length > 0 ? (
          imgs.map((img) => (
            <img
              src={img}
              key={id}
              alt="props"
              className="h-60 w-full object-cover"
            />
          ))
        ) : (
          <img
            src={img}
            key={id}
            alt="props"
            className="h-60 w-full object-cover"
          />
        )}
      </Carousel>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          {price}
        </span>
      </div>
      <div className="flex justify-center mb-7">
        <button
          className={`${
            isDisabled ? "bg-gray-600" : "bg-yellow-600"
          } text-white text-lg w-3/4 p-1 font-bold rounded`}
          onClick={() => handleBookNow(id)}
          disabled={isDisabled}
        >
          {isDisabled ? "Booked" : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default PropertyCards;
