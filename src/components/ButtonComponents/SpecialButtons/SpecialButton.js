import React from "react";
import "../../../App.css";

export const SpecialButton = (props) => {
  return (
    <>
      <button className="specialButton">{props.special}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
