import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorBlock = styled.div`
  background-color: lemonchiffon;
  display: grid;
  grid-template-rows: 9fr 1fr;
  align-items: center;
  text-align: center;
  width: 90%;
  min-width: 600px;

  h1{
    font-size: 5vh;
    color: darkslategray;
  }

  a{
    font-size: 3vh;
    text-decoration: none;
    color: tomato;
    transition: color .3s ease-in;

    :hover{
      color: lightgreen;
    }
  }
`

const Error = () => {
  return (
    <ErrorBlock>
      <h1>not found</h1>
      <div>
        <Link to="/">list</Link>
      </div>
    </ErrorBlock>
  );
};

export default Error;
