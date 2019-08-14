import React from "react";
import "../../../App.css";

const NumberButton = (props) => {
  return (
    <>
      <button className="numberButton">{props.num}</button>
    </>
  );
};

export default NumberButton
/* Display a button element rendering the data being passed down from the parent container on props */