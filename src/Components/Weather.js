import React, { useState, useEffect } from 'react'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
`;

const Input = styled.input`
    padding: 9px;
    width: 20%;
    border: 1px solid lightgrey;
    border-radius: 6px;
    font-size: 16px;
    margin-top: 30px;

    &:focus {
        outline: none;
    }
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 35px 0;
`;


const Card = styled.div`
    width: 200px;
    height: 250px;
    padding: 20px 30px;
    border-radius: 10px;
    border: 1 solid grey;
    background: black;
    color: white;
    margin-top: 30px;
`;

const Title2 = styled.h2`
    font-size: 35px;
    font-weight: 700;
    text-align: center;
`;

const SubTit = styled.p`
    font-size: 25px;
    text-align: center;
    font-weight: 500;
`;


const SubTitS = styled.p`
    position: relative;
    top: 20px;
    font-size: 18px;
    text-align: center;
    font-weight: 300;
`;

const Weather = () => {
    const apiKey = 'e1584eea1eff226bcd1430f4aaa8bfb5';
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState("");

    const getWeather = (event) => {
        if(event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                }
            )
        }
    }

    console.log(weatherData)
    
  return (
    <Container>
        <Input
            placeholder='Enter city..'
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
        />
        

        <Card>
                <Title2>{weatherData.name}</Title2>
                <SubTit>{Math.round(weatherData.main.temp)} C/F</SubTit>
                <SubTitS>{weatherData.weather[0].main}</SubTitS>
        </Card>

        {/* {typeof weatherData.main === undefined ? (
           <h1>Welcome to Application</h1>
        ): (
            <Card>
                <Title2>{weatherData.name}</Title2>
                <SubTit>{Math.round(weatherData.main.temp)} C/F</SubTit>
                <SubTitS>{weatherData.weather[0].main}</SubTitS>
            </Card>
        )}

      

        {
            weatherData.cod === "404" ? (
                <p>City not found</p>
            ) : (
                <>
                
                </>
            )
        } */}
    </Container>
  )
}

export default Weather