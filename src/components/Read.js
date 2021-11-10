import React, { useEffect, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { CHANGE_MENU, DELETE_ITEM } from '../module/boardReducer';
import { getLocalItem } from '../utils';
import Error from '../container/Error';
import styled from 'styled-components';

const ReadBlock = styled.div`
    display: grid;
    grid-template: 1fr min-content 6fr 1fr / 1fr 1fr;
    align-items: center;
    text-align: center;
    background-color: lemonchiffon;
    color: black;
    font-size: 2vh;
    overflow: hidden;
    width: 100%;
    min-width: 600px;

    .date, .views {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid blue;
    }

    .date {
        border-right: 1px solid coral;
    }

    .title {
        height: 100%;
        grid-column: span 2;
        overflow-wrap: break-word;

        h2 {
            font-size: 3vh;
            margin: 0;
            margin-bottom: 1vh;
            padding: 20px 10px;
            border-bottom: 1px solid blue;
        }
    }

    .content {
        height: 100%;
        grid-column: span 2;
        overflow-wrap: break-word;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px 20px;
        white-space: pre-wrap;
        border-bottom: 1px solid blue;
        text-align: left;
    }

    .btn-box {
        grid-column: span 2;
        display: flex;
        justify-content: space-around;
        font-size: 3vh;

        a, span{
            cursor: pointer;
            color: tomato;
            width: 20%;
            transition: color 0.1s ease-in;

            :hover{
                color: lightseagreen;
            }
        }

        a {
            text-decoration: none;
        }
    }
`;

const Read = memo(({ dispatch, match, history}) => {
    const item = getLocalItem(match.params.id);

    useEffect(() => {
        dispatch({ type: CHANGE_MENU, menu: 'Read' });
    }, [dispatch]);

    const onClickDelete = useCallback(() => {
        if(item){
            dispatch({ type: DELETE_ITEM, id: item.id });
            history.push('/');
        }
    }, [dispatch, history, item]);

    return (
        <>
            {item ? (
                <ReadBlock>
                    <div className="date">🗓 {item.date}</div>
                    <div className="views">👁 {item.views}</div>
                    <div className="title">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="content">{item.content}</div>
                    <div className="btn-box">
                        <Link to={`/update/${item.id}`}>🖋</Link>
                        <Link to="/">🗒</Link>
                        <span onClick={onClickDelete}>🗑</span>
                    </div>
                </ReadBlock>
            ) : (
                <Error />
            )}
        </>
    );
});

export default Read;