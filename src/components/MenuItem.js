import React from "react";


function MenuItem({ image, name, capital,  }) {
  return (
    <div className="menuItem">
      <h1> {name} </h1>
      <h2> {capital} </h2>
      <img classNam="image" src={image} style={{width: "300px" }}/>
    </div>
  );
}

export default MenuItem;

