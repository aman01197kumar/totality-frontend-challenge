import { useSelector } from "react-redux";
import { useState } from "react";
import Amenities from "./Amenities";
import Location from "./Location";
import NumberOfBeds from "./NumberOfBeds";
import Price from "./Price";
import SellIcon from "@mui/icons-material/Sell";
import { Button } from "@mui/material";
import { propertyCardData } from "../assets/data/propertyCardData";

export default function Filters({ setPropertyCard }) {
  const [findLocation, setFindLocation] = useState([]);
  const [price, setPrice] = useState([]);
  const [numberOfBeds, setNumberOfBed] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const { cartArray } = useSelector((state) => state.shoppingCart);

  function intersectArrays(...arrays) {
    const result = [];
    const pointers = new Array(arrays.length).fill(0);

    while (pointers.every((ptr, index) => ptr < arrays[index].length)) {
      const ids = arrays.map((arr, index) => arr[pointers[index]].id);
      const minId = Math.min(...ids);
      const maxId = Math.max(...ids);

      if (minId === maxId) {
        result.push(arrays[0][pointers[0]]); // Push from any array as they are the same
        pointers.forEach((_, index) => pointers[index]++);
      } else {
        pointers.forEach((_, index) => {
          if (ids[index] === minId) {
            pointers[index]++;
          }
        });
      }
    }
    return result;
  }

  const applyFilterHandler = () => {
    const filters = [findLocation, price, amenities, numberOfBeds].map(
      (filter) => (filter.length !== 0 ? filter : propertyCardData)
    );

    const filteredData = filters.every((filter) => filter === propertyCardData)
      ? []
      : intersectArrays(...filters);

    console.log("filtered data:", filteredData);
    setPropertyCard(filteredData);
  };

  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md">
      <div className="flex-1 md:flex-initial">
        <Location setFindLocation={setFindLocation} />
      </div>
      <div className="flex-1 md:flex-initial">
        <Price setPrice={setPrice} />
      </div>
      <div className="flex-1 md:flex-initial">
        <NumberOfBeds setNumberOfBed={setNumberOfBed} />
      </div>
      <div className="flex-1 md:flex-initial">
        <Amenities setAmenities={setAmenities} />
      </div>
      <Button onClick={applyFilterHandler}>Apply Filters</Button>
      <div
        className="flex-1 md:flex-initial md:flex-reverse cursor-pointer bg-yellow-600 p-2 relative rounded flex items-center justify-between" // Added flex classes here
        onClick={() => navigate("cart")}
      >
        <div className="lg:absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
          {cartArray ? cartArray.length : 0}
        </div>
        <SellIcon className="text-white" />
      </div>
    </div>
  );
}
