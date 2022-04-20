import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';


const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   padding: 50px 35px;

`;

const WrapperIn = styled.div`
  flex: 1;
  padding: 0 45px;
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  color: #f57c62;
`;


const Description = styled.p`
  font-size: 20px;
  font-weight: italic;
  color: #C70039;
`;

const Image = styled.img`
    margin: 12px;
    border: 1px solid  #e2e3e3 ;
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);
    max-width: 33vw;
  `;


const CityDetail = ({ names }) => {
  const { name } = useParams();
  return (
    <div>
        {
            names.filter((da) => da.name === name).map((da) => (
            <Wrapper key={da.id}>
              <div>
                  <Image src={da.image}></Image>
              </div>
              <WrapperIn>
                <Title>{da.name}</Title>
                <Description>{da.description}</Description>
              </WrapperIn>
            </Wrapper>
        ))}
    </div>
  )
}

export default CityDetail