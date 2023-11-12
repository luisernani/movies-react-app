import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//====================================
// Api key from www.OMDbapi.com = 3bce88a4
//====================================
const API_URL = 'http://www.omdbapi.com?apikey=3bce88a4';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Orange');
    }, []);


  

    return(
        <div className="app">
            <h1>Movies Catalogue</h1>

           <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
           </div>

            {
                movies?.length > 0
                    ?(
                        <div className="container">
                            {
                                movies.map((movie) => (
                                    <MovieCard movie={movie} />
                                ))
                            }
                        </div>             
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        
        </div>        
    );
};

export default App;