import React from 'react'
import '../styles/City.css';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';

const Image = styled.img`
    margin: 12px;
    border: 1px solid  #e2e3e3 ;
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);
    max-width: 23vw;
  `;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 100vh;
    padding: 25px 0;

`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #f57c62;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: italic;
  color: #C70039;
`;

const City = (props) => {

  const data = [{
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

console.log(data)
  return (
    <>
    
    <div className='City'>

      <Wrapper>
      {
        data.map((da, index) => (
          <>
            <Image src={da.image} />
            <Title>{da.name}</Title>
            <Description>{da.description}</Description>
          </>
            
        ))
      }
      </Wrapper>
    </div>

    </>
  )
}

export default City