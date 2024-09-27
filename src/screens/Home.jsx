import React, { useState } from "react";
import PropertyCards from "../components/PropertyCards";
import { propertyCardData } from "../assets/data/propertyCardData";
import Filters from "../components/Filters";
import { Drawer, IconButton, Menu } from "@mui/material";

const Home = () => {
  const [propertyCard, setPropertyCard] = useState(propertyCardData);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon for Mobile View */}
      <IconButton
        edge="start"
        className="block md:hidden"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <Menu />
      </IconButton>

      {/* Drawer Component */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="w-1/2 mr-20">
          <Filters setPropertyCard={setPropertyCard} />
        </div>
      </Drawer>

      {/* Filters for larger screens */}
      <div className="hidden md:block">
        <Filters setPropertyCard={setPropertyCard} />
      </div>

      {/* Property Cards Display */}
      <div className="flex flex-wrap items-start">
        {propertyCard?.map(({ id, imgs, title, description, price }) => (
          <div key={id} className="w-full sm:w-1/2 lg:w-1/3 p-10">
            <PropertyCards
              id={id}
              imgs={imgs}
              title={title}
              description={description}
              price={price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
