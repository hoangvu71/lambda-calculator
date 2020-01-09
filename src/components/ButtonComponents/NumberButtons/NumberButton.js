import React from "react";
import Display from "../../DisplayComponents/Display"

const NumberButton = (props) => {
  
  return (
    <button className="btnNumber" onClick={() => props.setResult(count => count + props.number)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    {props.number}
    </button>
  );
};

export default NumberButton
