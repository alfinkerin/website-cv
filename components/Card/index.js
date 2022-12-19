import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white p-10 my-4 w-[100%] rounded-md h-auto shadow-md">
      {children}
    </div>
  );
};

export default Card;
