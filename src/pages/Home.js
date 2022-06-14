import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { useDispatch } from "react-redux";
import { press } from "../features/country"
import SearchBar from "../components/Searchbar";
import  "../styles/Home.css"

function Home() {
    const dispatch = useDispatch();

    const [countries, setCountries] = useState([]);
    const [tosearch, setTosearch] = useState([]);

    console.log(tosearch)
    console.log(typeof tosearch)
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(response => setCountries(response))
    }, []);

    

    return (
    <div className="home">
        <div className="sbcontainer">
          <SearchBar keyword={tosearch} setKeyword={setTosearch} />
          <Link to="/detail" onClick={() => {dispatch(press({name : JSON.stringify(tosearch)})) }}>
              <button > SEARCH </button>
            </Link>
           
        </div>
      <h1> Country Menu </h1>

        <div className="countryList">{countries.slice(0,12).map((menuItem, key) => {
            return(

                <Link to="/detail"
                    onClick={() => {
                        dispatch(press({ name: menuItem.name.common}))
                    }                
                }
                >
                   <MenuItem
                        key={key}
                        image={menuItem.flags.svg}
                        name={menuItem.name.common}
                        capital={menuItem.capital}
                    />  
                </Link>
               
                )


        })}</div>
        


    </div>

    );
}

export default Home;
