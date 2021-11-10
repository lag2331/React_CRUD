import React, { useReducer, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import List from './components/List';
import Write from './components/Write';
import Update from './components/Update';
import Read from './components/Read';
import './App.css';
import { boardReducer, GET_LOCAL_STORAGE } from './module/boardReducer';

const Board = styled.div`
  width: 100%;
  height: 100%;
  max-height: 800px;
  display: grid;
  padding-top: 5vh;
  grid-template-rows: 1.5fr .5fr 8fr;

  .menu {
    background-color:cornflowerblue;
    width: 100%;
    max-width: 800px;
    min-width: 600px;
    justify-self: center;
    align-self: center;

    h1 {
      font-size: 5vh;
      line-height: 150%;
      text-align: center;
      text-transform: uppercase;
      color: white;
      letter-spacing: 8px;
    }
  }

  .btn-write {
    width: 100%;
    max-width: 800px;
    min-width: 600px;
    line-height: 250%;
    text-align: right;
    justify-self: center;
    background-color: black;

    a {
      font-weight: bold;
      font-size: 3vh;
      padding-right: 1.5vh;
      color: white;
      text-decoration: none;
      transition: color .3s ease-in;
      text-decoration-color: white;

      :hover{
        color: coral;
      }
    }
  }

  .wrap {
    width: 100%;
    max-width: 800px;
    min-width: 600px;
    display: flex;
    overflow: hidden;
    justify-content: center;
    justify-self: center;
  }

`;

const initialState = {
  list: [],
  id: 0,
  menu: 'List',
}

const App = () => {
  const [state, dispatch] = useReducer(boardReducer, initialState);
  const { list, id, menu } = state;
  const isMount = useRef(true);

  useEffect(() => {
    if(!isMount.current){
      localStorage.setItem('list', JSON.stringify(list));
      localStorage.setItem('id', id);
    }
  },[id, list]);

  useEffect(() => {
    dispatch({ type: GET_LOCAL_STORAGE });
    isMount.current = false;
  }, []);

  return (
    <Board>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="menu">
          <h1>{menu}</h1>
        </div>
        <div className="btn-write">
          <Link to="/write">🖋</Link>
        </div>
        <div className="wrap">
          <Route
            path="/"
            exact={true}
            render={() => <List list={list} dispatch={dispatch} />}
          />
          <Route
            path="/write"
            render={(routeProps) => (
              <Write id={id} dispatch={dispatch} {...routeProps} />
            )}
          />
          <Route
            path="/update/:id"
            render={(routeProps) => (
              <Update dispatch={dispatch} {...routeProps} />
            )}
          />
          <Route
            path="/read/:id"
            render={(routeProps) => (
              <Read dispatch={dispatch} {...routeProps} />
            )}
          />
        </div>
      </BrowserRouter>
    </Board>
  );
};

export default App;