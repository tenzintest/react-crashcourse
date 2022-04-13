import logo from './logo.svg';
import './App.css';
import City from './Components/City';
import Village from './Components/Village';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
    let say = "hello world";

    return ( <
        Router >
        <
        Navbar / >

        <
        Routes >
        <
        Route exact path = "/city"
        element = { < City / > }
        />

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
        /Router>
    );
}

export default App;