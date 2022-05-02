import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( <
        div >
        <
        ul className = 'navbar' >
        <
        li >
        <
        Link to = "/city"
        style = {
            { textDecoration: 'none' }
        } >
        City <
        /Link> < /
        li > <
        li >
        <
        Link to = "/country"
        style = {
            { textDecoration: 'none' }
        } >
        Country <
        /Link> < /
        li > <
        li >
        <
        Link to = "/village"
        style = {
            { textDecoration: 'none' }
        } >
        Village <
        /Link> < /
        li > <
        li >
        <
        Link to = "/movie"
        style = {
            { textDecoration: 'none' }
        } >
        Movie <
        /Link> < /
        li > <
        li >
        <
        Link to = "/pic"
        style = {
            { textDecoration: 'none' }
        } >
        Pic <
        /Link> < /
        li > <
        li >
        <
        Link to = "/users"
        style = {
            { textDecoration: 'none' }
        } >
        Users <
        /Link> < /
        li > <
        li >
        <
        Link to = "/crud"
        style = {
            { textDecoration: 'none' }
        } >
        CRUD <
        /Link> < /
        li > <
        li >
        <
        Link to = "/signup"
        style = {
            { textDecoration: 'none' }
        } >
        Sign Up <
        /Link> < /
        li > <
        /ul> < /
        div >
    )
}

export default Navbar