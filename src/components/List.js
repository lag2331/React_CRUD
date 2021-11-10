import React, { useEffect, memo } from 'react';
import { CHANGE_MENU } from '../module/boardReducer';
import ListItem from './ListItem'
import styled from 'styled-components';

const ListBlock = styled.div`
    display: grid;
    grid-template: 10% 90% / 6fr 2.5fr 1.5fr;
    color: darkslategray;
    overflow-y: auto;
    width: 100%;
    min-width: 600px;

    .header {
        background-color: lemonchiffon;
        font-size: 3vh;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        display: flex;
        justify-content: center;
        line-height: 250%;
        font-weight: normal;
        border-bottom: 2px solid blue;

        :nth-child(2) {
            border-left: 2px solid lightsalmon;
            border-right: 2px solid lightsalmon;
        }
    }

    .items {
        grid-column: span 3;
    }
`;

const List = memo(({ list, dispatch }) => {
    useEffect(() => {
        dispatch({ type: CHANGE_MENU, menu: 'List' });
    }, [dispatch]);

    return (
        <ListBlock>
            <div className="header">제목</div>
            <div className="header">날짜</div>
            <div className="header">조회</div>
            <div className="items">
                {list
                    .sort((a, b) => b.id - a.id)
                    .map((item) => {
                        return <ListItem key={item.id} item={item} dispatch={dispatch} />;
                    })}
            </div>
        </ListBlock>
    );
});

export default List;