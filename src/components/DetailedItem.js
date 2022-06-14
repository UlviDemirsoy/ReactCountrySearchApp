
import React from 'react'
import "../styles/DetailedItem.css"


function DetailedItem({ image, name, capital, region, population, map }) {
    return (
      <div className="detailedItem">
        <h1> Name: {name} </h1>
        <h1> Capital: {capital} </h1>
        <h1> Region: {region} </h1>
        <h1> Population: {population} </h1>
        <h1> Map: {map} </h1>
        <img src={image} style={{width: "1000px"}}/>
      </div>
    );
  }
  

export default DetailedItem
