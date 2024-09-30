import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { useState } from "react";
import { propertyCardData } from "../assets/data/propertyCardData";

const amenities = [
  "Gym",
  "Pool",
  "Complimentary Breakfast",
  "Free Parking",
  "Playing Area",
];

const Amenities = ({ setAmenities }) => {
  const [amenity, setAmenity] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setAmenity(selectedValue);

    const filteredData = propertyCardData.filter(
      (property) => property.amenities.includes(selectedValue) // Check if the selectedValue is in the amenities array
    );

    
    setAmenities(filteredData);
  };

  return (
    <FormControl sx={{ mt: 1, width: 220 }} size="small">
      <InputLabel id="demo-select-small-label">Amenities</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={amenity}
        label="Amenities"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {amenities.map((amenity) => (
          <MenuItem value={amenity} key={amenity}>
            {amenity}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Amenities;
