import React, {useState} from "react";

//import any components needed
import {SpecialsArray} from "../../../data"
import {SpecialButton} from "./SpecialButton"

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specials, setSpecials] = useState(SpecialsArray)
  return (
    <div>
      {SpecialsArray.map( item => (
        <SpecialButton special={item} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
