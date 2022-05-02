import React, {useState, useEffect} from 'react'
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import axios from 'axios'
import MovieResult from './MovieResult';


const MovieList = ({}) => {

    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
      });
      const apiurl = "http://www.omdbapi.com/?apikey=37765adb";
    
      const search = (e) => {
        if (e.key === "Enter") {
          axios(apiurl + "&s=" + state.s).then(({ data }) => {
            let results = data.Search;
    
            setState(prevState => {
              return { ...prevState, results: results }
            })
          });
        }
      }
      
      const handleInput = (e) => {
        let s = e.target.value;
    
        setState(prevState => {
          return { ...prevState, s: s }
        });
      }
    
      const openPopup = id => {
        axios(apiurl + "&i=" + id).then(({ data }) => {
          let result = data;
    
          console.log(result);
    
          setState(prevState => {
            return { ...prevState, selected: result }
          });
        });
      }
    
      const closePopup = () => {
        setState(prevState => {
          return { ...prevState, selected: {} }
        });
      }
  

  return (
    <>
        <main>
            <SearchBox handleInput={handleInput} search={search}/>
            <MovieResult result={state.results} openPopup={openPopup}/>

            {(typeof state.selected.Title != "undefined") ? <MovieListHeading selected={state.selected} closePopup={closePopup} /> : false}
        </main>   
    </>
  )
}

export default MovieList