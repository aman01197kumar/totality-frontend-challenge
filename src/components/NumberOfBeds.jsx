import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { useState } from "react";
import { propertyCardData } from "../assets/data/propertyCardData";

const NumberOfBeds = ({ setNumberOfBed }) => {
  const [noOfBeds, setNoOfBeds] = useState(0);

  const handleChange = (e) => {
    
    setNoOfBeds(e.target.value)
    

    const filteredData = propertyCardData.filter(
      (item) => item.no_of_beds === noOfBeds // Direct comparison instead of includes
    );
    setNumberOfBed(filteredData);
  };

  return (
    <FormControl sx={{ mt: 1, width: 220 }} size="small">
      <InputLabel id="demo-select-small-label">Number of Beds</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={noOfBeds}
        label="Number of Beds"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {[1, 2, 3, 4, 5].map((bed) => (
          <MenuItem value={bed} key={bed}>
            {bed}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default NumberOfBeds;
