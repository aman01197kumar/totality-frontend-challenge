import React, { useEffect, useState } from "react";
import PropertyCards from "../components/PropertyCards";
import { propertyCardData } from "../assets/data/propertyCardData";
import Filters from "../components/Filters";
import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NoDataFound from "./NoDataFound";

const Home = () => {
  const [propertyCard, setPropertyCard] = useState(propertyCardData);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className="relative">
      <IconButton
        edge="start"
        className="block xl:hidden" // Shows on mobile, hides on larger screens
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer Component for Filters */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="p-4 w-1/3">
          <h2>Filters</h2> {/* Title for the filters section */}
          <Filters setPropertyCard={setPropertyCard} />
        </div>
      </Drawer>

      {/* Filters for larger screens */}
      <div className="hidden md:block">
        <Filters setPropertyCard={setPropertyCard} />
      </div>

      {/* Property Cards Display */}
      <div className="flex flex-wrap items-start">
        {propertyCard.length > 0 ? (
          propertyCard.map(({ id, imgs, title, description, price }) => (
            <div key={id} className="w-full sm:w-1/2 lg:w-1/3 p-10">
              <PropertyCards
                id={id}
                imgs={imgs}
                title={title}
                description={description}
                price={price}
              />
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center w-full">
            <NoDataFound />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
