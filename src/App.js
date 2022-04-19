import logo from './logo.svg';
import City from './Components/City';
import Village from './Components/Village';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";


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
    
    return ( <
        Router >
        <
        Navbar / >

        <
        Routes >
        <
        Route exact path = "/city"
        element = { < City name = "Paris" /
            >
        }
        / >

        <
        Route exact path = "/village"
        element = { < Village / > }
        />

        <
        Route exact path = "/country"
        element = { < Country / > }
        />

        <
        /Routes>

        <
        Village / >

        <
        /Router>
    );
}

export default App;