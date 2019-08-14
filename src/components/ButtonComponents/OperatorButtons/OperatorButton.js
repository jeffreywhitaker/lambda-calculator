import React from "react";
import "../../../App.css";

export const OperatorButton = (props) => {
  return (
    <>
      <button className="operatorButton">{props.operator}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
