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

const App = () => { 

    const data = [
        {
        "id": 0,
        "name": "Paris",
        "description": "Paris , c'est l'amour",
        "image": "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
        "id": 1,
        "name": "Bern",
        "description": "Bern soo nice",
        "image": "https://images.unsplash.com/photo-1597947967084-339b2116a030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    },
    {
        "id": 2,
        "name": "Tokyo",
        "description": "Tokoyo so advance city",
        "image": "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80"
    },
    {
        "id": 3,
        "name": "Soeul",
        "description": "Soeul K-pop",
        "image": "https://images.unsplash.com/photo-1554310603-d39d43033735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    
    ];

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
        element = { < City names={data}/
            >  
        }
        / >

        <
        Route exact path = "/city/:name"
        element = { <CityDetail names={data} /
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
        
        <Route exact path="/weather" 
            element={ <Weather/>}
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