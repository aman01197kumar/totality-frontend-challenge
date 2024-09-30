import React from "react";

const NoDataFound = () => {
  return (
    <div>
      <p className="text-lg font-semibold text-gray-600">No Data Found</p>
      <p className="text-gray-500">
        It looks like we couldn't find any data matching your search.
      </p>
    </div>
  );
};

export default NoDataFound;
