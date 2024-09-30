import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { useState } from "react";
import { propertyCardData } from "../assets/data/propertyCardData";

const prices = [
  "less than 100000",
  "100000-500000",
  "500000-1000000",
  "1000000 above",
];

const Price = ({ setPrice }) => {
  const [priceRange, setPriceRange] = useState("");

  const handleChange = (e) => {
    const selectedRange = e.target.value;
    setPriceRange(selectedRange);

    // setPrice(priceRange);

    const filteredData = propertyCardData.filter((item) => {
      const price = item.price; // Assuming item.price is a number
      return isPriceInRange(price, selectedRange);
    });

    setPrice(filteredData);
  };

  const isPriceInRange = (price, range) => {
    if (range === "less than 100000") {
      return price < 100000;
    } else if (range === "100000-500000") {
      return price >= 100000 && price <= 500000;
    } else if (range === "500000-1000000") {
      return price > 500000 && price <= 1000000;
    } else if (range === "1000000 above") {
      return price > 1000000;
    }
    return true; // If no range is selected, return all items
  };

  return (
    <FormControl sx={{ mt: 1, width: 220 }} size="small">
      <InputLabel id="demo-select-small-label">Price Range</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={priceRange}
        label="Price Range"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {prices.map((price) => (
          <MenuItem value={price} key={price}>
            {price}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Price;
