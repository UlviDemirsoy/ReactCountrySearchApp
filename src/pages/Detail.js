import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux"
import DetailedItem from "../components/DetailedItem"
import { Link } from "react-router-dom";
import  "../styles/Detail.css"

function Detail() {

    let vari = useSelector((state) => state.country.value)
    
    console.log(vari)
    let lower = vari.name.toLowerCase();
    console.log(lower)

    const [searcher, setSearcher] = useState([]);

    var url = `https://restcountries.com/v3.1/name/${lower}`
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => setSearcher(response))

    }, []);

    return (
        <div className="detail">
            <div className= "homepage"><Link to="/" style={{ textDecoration: 'none' }} >HOMEPAGE</Link></div>
            
            
            {(searcher.slice(0,1)).map((detailedItem, key) => {
            return(
                   <DetailedItem
                        key={key}
                        image={detailedItem.flags.svg}
                        name={detailedItem.name.common}
                        capital={detailedItem.capital}
			            population={detailedItem.population}
			            map={detailedItem.maps.googleMaps}
                        region ={detailedItem.region}
                    />  
                )
        })}
        </div>
    ) 
}


export default Detail