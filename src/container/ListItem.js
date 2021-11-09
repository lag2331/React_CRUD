import React, { useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { INCREASE_VIEWS } from '../module/boardReducer';
import styled from 'styled-components';

const ListItemBlock = styled.div`
    display: grid;
    grid-template-columns: 5.5fr 2.5fr 2fr;
    font-size: 2vh;
    width: 100%;
    line-height: 3.5vh;
    border-bottom: 1px dotted lightseagreen;
    background-color: lemonchiffon;

    div {
        padding: 0 10px 0 10px;
    }

    .title {
        overflow: auto;
        overflow-wrap: break-word;

        a {
            text-decoration: none;
            color: darkslategray;
        }
    }

    .date, .views {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .date {
        border-left: 1px dotted lightslategray;
        border-right: 1px dotted lightslategray;
    }
`;

const ListItem = memo(({ item, dispatch }) => {
  const { id, title, date, views } = item;

  const onClickItem = useCallback(
    (id) => () => {
      dispatch({ type: INCREASE_VIEWS, id });
    },
    [dispatch]
  );

  return (
    <ListItemBlock>
      <div className="title">
        <Link onClick={onClickItem(id)} to={`/read/${id}`}>
          {title}
        </Link>
      </div>
      <div className="date">{date}</div>
      <div className="views">{views}</div>
    </ListItemBlock>
  );
});

export default ListItem;
