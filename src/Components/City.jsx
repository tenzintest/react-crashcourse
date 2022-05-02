import React from 'react'
import '../styles/City.css';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';

const Image = styled.img `
    margin: 12px;
    border: 1px solid  #e2e3e3 ;
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);
    max-width: 23vw;
  `;

const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 100vh;
    padding: 25px 0;

`;

const Title = styled.h1 `
  font-size: 20px;
  font-weight: bold;
  color: #f57c62;
`;

const Description = styled.p `
  font-size: 15px;
  font-weight: italic;
  color: #C70039;
`;

const City = ({ names }) => {
    return ( <
        >
        <
        Wrapper > {
            names.map((da) => ( <
                div key = { da.id } >
                <
                Link to = { `/city/${da.name}` } >
                <
                Image src = { da.image }
                /> < /
                Link > <
                Title > { da.name } < /Title> <
                Description > { da.description } < /Description> < /
                div >

            ))
        } <
        /Wrapper> < / >
    )
}

export default City