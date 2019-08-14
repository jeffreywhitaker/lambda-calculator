import React, {useState} from "react";

//import any components needed
import {OperatorsArray} from "../../../data"
import {OperatorButton} from "./OperatorButton"
//Import your array data to from the provided data file

export const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(OperatorsArray)
  return (
    <div>
        {OperatorsArray.map( item => (
        <OperatorButton operator={item.char} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
