import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { propertyCardData } from "../assets/data/propertyCardData";

const Location = ({setPropertyCard}) => {


  const handleChange = (e) => {
    const inputVal = e.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    const filteredData = propertyCardData.filter((item) => 
      item.title.toLowerCase().includes(inputVal) || 
      item.location.toLowerCase().includes(inputVal)
    );
    setPropertyCard(filteredData);
  };
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Location"
        inputProps={{ "aria-label": "search location" }}
        onChange={(e)=>handleChange(e)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Location;
