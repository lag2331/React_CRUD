import React, { useReducer, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import List from './components/List';
import Write from './components/Write';
import Update from './components/Update';
import Read from './components/Read';
import { boardReducer, GET_LOCAL_STORAGE } from './module/boardReducer';
import './App.css';

// const Board = styled.div`
//   width: 100%;
//   height: 100%;
//   display: grid;
//   padding: 5vh;
//   grid-template-rows: 1.5fr 50px 8.5fr;

//   .menu {
//     background-color:deepskyblue;
//     width: 90%;
//     max-width: 800px;
//     justify-self: center;
//     align-self: center;

//     h1 {
//       font-size: 5vh;
//       line-height: 150%;
//       text-align: center;
//       text-transform: uppercase;
//       color: white;
//       letter-spacing: 4px;
//     }
//   }

//   .btn-write {
//     width: 90%;
//     max-width: 800px;
//     line-height: 200%;
//     text-align: right;
//     align-self: center;
//     justify-self: center;

//     a {
//       font-weight: bold;
//       font-size: 3vh;
//       color: tomato;
//       transition: color 0.1s ease-in;
//       text-decoration-color: lightsalmon;

//       & + hover{
//         color: lightseagreen;
//       }
//     }
//   }

//   .wrap {
//     width: 100%;
//     min-width: 600px;
//     max-width: 900px;
//     display: flex;
//     justify-content: center;
//     overflow: hidden;
//     justify-self: center;
//   }

// `;

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
    <div className="Board">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="menu">
          <h1>{menu}</h1>
        </div>
        <div className="btn-write">
          <Link to="/write">Write</Link>
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
    </div>
  );
};

export default App;