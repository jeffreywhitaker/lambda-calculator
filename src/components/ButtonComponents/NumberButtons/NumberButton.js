import React from "react";
import "../../../App.css";

export const NumberButton = (props) => {
  return (
    <>
      <button className="numberButton">{props.num}</button>
    </>
  );
};
/* Display a button element rendering the data being passed down from the parent container on props */