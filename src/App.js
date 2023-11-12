import React, { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

//====================================
// Api key from omdbapi.com = 3bce88a4
//====================================
const API_URL = 'http://www.omdbapi.com?apikey=3bce88a4';

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return(
        <div className="app">
            <h1>Gamarei Moviessss</h1>
        </div>
    );
};

export default App;