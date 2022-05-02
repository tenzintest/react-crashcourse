import logo from './logo.svg';
import City from './Components/City';
import Village from './Components/Village';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ErrorPage from './Components/ErrorPage';
import CityDetail from './Components/CityDetail';
import Weather from './Components/Weather';
import Signup from './Components/Signup';
import { Container } from 'react-bootstrap';
import VillageDetail from './Components/VillageDetail';
import Photo from './Components/Photo';
import MovieList from './Components/MovieList';
import Users from './Components/Users';
import Crud from './Components/Crud';
import { collection, getDocs } from "firebase/firestore";
import {db} from './firebase-config';


const App = () => { 

    const [city, setCity] = useState([]);
    const userCollectionRef = collection(db, "city");
  
  
    useEffect(() => {
      const getCity = async () => {
        const data = await getDocs(userCollectionRef);
        setCity(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };
  
      getCity();
    },[])
  
    console.log(city);

 

    const village = [
        {
        "id": 0,
        "name": "Gare de nord",
        "description": "Gare de nord , c'est l'amour",
        "image": "https://images.unsplash.com/photo-1489226094027-3b32e467edc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
        "id": 1,
        "name": "Gare de Cornvain",
        "description": "Gare de Cornvain soo nice",
        "image": "https://images.unsplash.com/photo-1562910253-ab616f5fb4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        "id": 2,
        "name": "Gare de Lyon",
        "description": "Gare de Lyon so advance city",
        "image": "https://images.unsplash.com/photo-1555347659-7cdc7e5952a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
        "id": 3,
        "name": "Gare de Bale",
        "description": "Gare de Bale",
        "image": "https://images.unsplash.com/photo-1620416007656-ece2d94cc65e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    },
    {
      "id": 0,
      "name": "Gare de nord2",
      "description": "Gare de nord , c'est l'amour",
      "image": "https://images.unsplash.com/photo-1489226094027-3b32e467edc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      "id": 1,
      "name": "Gare de Cornvain3",
      "description": "Gare de Cornvain soo nice",
      "image": "https://images.unsplash.com/photo-1562910253-ab616f5fb4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      "id": 2,
      "name": "Gare de Lyon4",
      "description": "Gare de Lyon so advance city",
      "image": "https://images.unsplash.com/photo-1555347659-7cdc7e5952a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      "id": 3,
      "name": "Gare de Bale5",
      "description": "Gare de Bale",
      "image": "https://images.unsplash.com/photo-1620416007656-ece2d94cc65e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
    },
    
    ];

    return ( 
        <
        Router >
        <
        Navbar / >
        <Routes>

        <
        Route exact path = "/city"
        element = { < City names={city}/
            >  
        }
        / >

        <
        Route exact path = "/city/:name"
        element = { <CityDetail names={city} /
            >
        }
        / >

        <
        Route exact path = "/village"
        element = { < Village names={village}/ > }
        />

        <Route exact path="/village/:name"
            element= { <VillageDetail names={village} />}
        />

        <
        Route exact path = "/country"
        element = { < Country / > }
        />
        <Route path="*" element={<ErrorPage />} />

        <Route exact path="/pic" 
            element={ <Photo/>}
        /> 

        <Route exact path="/movie" element={ <MovieList/>}
        />

        <Route exact path="/users" element={ <Users/>}
        />

        <Route exact path="/crud" elemet={ <Crud/> } 
        />

        <Route exact path="/signup" 
        element={ <Signup/>}
    /> 

        
        <
        /Routes>
        </Router>
    );
}

export default App;