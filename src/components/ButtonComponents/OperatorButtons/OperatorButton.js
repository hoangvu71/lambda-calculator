import React from "react";

const OperatorButton = (props) => {
function resultHandler(){
  if (props.char === "="){
    props.setResult(prevState => prevState * 10);
  }
}
  return (
    <button className="operatorBtn" onClick={resultHandler}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.char}
    </button>
  );
};

export default OperatorButton;
