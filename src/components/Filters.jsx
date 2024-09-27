import { useSelector } from "react-redux";
import Amenities from "./Amenities";
import Location from "./Location";
import NumberOfBeds from "./NumberOfBeds";
import Price from "./Price";
import SellIcon from "@mui/icons-material/Sell";
import { useNavigate } from "react-router-dom";

export default function Filters({ setPropertyCard }) {
  const navigate = useNavigate();
  const { cartArray } = useSelector((state) => state.shoppingCart);

  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md">
      <div className="flex-1 md:flex-initial">
        <Location setPropertyCard={setPropertyCard} />
      </div>
      <div className="flex-1 md:flex-initial">
        <Price setPropertyCard={setPropertyCard} />
      </div>
      <div className="flex-1 md:flex-initial">
        <NumberOfBeds setPropertyCard={setPropertyCard} />
      </div>
      <div className="flex-1 md:flex-initial">
        <Amenities setPropertyCard={setPropertyCard} />
      </div>
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
