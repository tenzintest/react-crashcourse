import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase-config';
import { signOutNow } from '../firebase-config';

const Navbar = () => {
    return ( <
        div >
        <
        ul className = 'navbar' >
        <
        li >
        <
        Link to = "/"
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
        li >
        <
        li >
        <
        Link to = "/login"
        style = {
            { textDecoration: 'none' }
        } >
        Sign In <
        /Link> < /
        li >
        <
        li >
        <
        Link to = "/signup"
        style = {
            { textDecoration: 'none' }
        } >
        Sign up <
        /Link> < /
        li >
        <
        /ul> < /
        div >
    )
}

export default Navbar