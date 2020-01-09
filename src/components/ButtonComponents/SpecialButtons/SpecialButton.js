import React from "react";

const SpecialButton = (props) => {
  function resultHandler(){
    if (props.special === "C"){
      props.setResult(0);
    }
    if (props.special === "+/-"){
      props.setResult(prevState => prevState * (-1));
    }
    if (props.special === "%"){
      props.setResult(prevState => prevState * 0.01);
    }
  }
  return (
    <button className="specialBtn" onClick={resultHandler}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </button>
  );
};

export default SpecialButton