import { useSelector } from "react-redux";
import { useState } from "react";
import Amenities from "./Amenities";
import Location from "./Location";
import NumberOfBeds from "./NumberOfBeds";
import Price from "./Price";
import SellIcon from "@mui/icons-material/Sell";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { propertyCardData } from "../assets/data/propertyCardData";

export default function Filters({ setPropertyCard }) {
  const [findLocation, setFindLocation] = useState([]);
  const [price, setPrice] = useState([]);
  const [numberOfBeds, setNumberOfBed] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const { cartArray } = useSelector((state) => state.shoppingCart);

  function intersectArrays(arr1, arr2, arr3, arr4) {
    let result = [];
    let i = 0,
      j = 0,
      k = 0,
      l = 0;

    // Traverse all four arrays
    while (
      i < arr1.length &&
      j < arr2.length &&
      k < arr3.length &&
      l < arr4.length
    ) {
      let id1 = arr1[i].id;
      let id2 = arr2[j].id;
      let id3 = arr3[k].id;
      let id4 = arr4[l].id;

      // If all Ids are equal, it's an intersection
      if (id1 === id2 && id2 === id3 && id3 === id4) {
        result.push(arr1[i]); // or any of arr1[i], arr2[j], arr3[k], arr4[l] as they are the same
        i++;
        j++;
        k++;
        l++;
      }
      // Increment the pointer of the array with the smallest Id
      else if (id1 < id2) {
        i++;
      } else if (id2 < id3) {
        j++;
      } else if (id3 < id4) {
        k++;
      } else {
        l++;
      }
    }

    return result;
  }
  const applyFilterHandler = () => {
    const filteredData = intersectArrays(
      findLocation.length !== 0 ? findLocation : propertyCardData,
      price.length !== 0 ? price : propertyCardData,
      amenities.length !== 0 ? amenities : propertyCardData,
      numberOfBeds.length !== 0 ? numberOfBeds : propertyCardData
    );
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
