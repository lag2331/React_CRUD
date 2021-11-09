import React, { useRef, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import useInputs from '../module/useInputs';
import { ADD_ITEM, CHANGE_MENU } from '../module/boardReducer';
import styled from 'styled-components';

const FormBlock = styled.div`
  display: grid;
  grid-template-rows: 1.5fr 7.5fr 1fr;
  background-color: lemonchiffon;
  color: darkslategray;
  width: 90%;
  min-width: 600px;

  .input-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 6px double lightsalmon;

    input {
      background-color: transparent;
      text-align: center;
      border: none;
      font-size: 3vh;
      color: darkslategray;
      font-family: 'Courier New', Courier, monospace;
      width: 100%;
      padding: 20px;
      font-weight: bold;

      input::placeholder {
        color: lightslategray;
      }

      :focus {
        outline: none;
      }
    }
  }

  .textarea {
    background-color: transparent;
    border: none;
    font-size: 2vh;
    color: darkslategray;
    padding: 20px;
    border-bottom: 1px dotted lightseagreen;
    font-family: 'Courier New', Courier, monospace;
    line-height: 130%;

    :focus {
      outline: none;
    }
  }

  .btn-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font-size: 3vh;

    span {
      color: coral;
      cursor: pointer;
      transition: all 0.3s ease-in;

      :hover {
        color: lightseagreen;
      }
    }

    a {
      text-decoration: none;
      color: lightslategray;
    }
  }

`;

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDay()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

const Write = memo(({ id, dispatch, history }) => {
    const item = {};
    const [state, onChangeInput] = useInputs({ title: '', content: '' });
    const { title, content } = state;
    const inputTitle = useRef(null);
    const inputContent = useRef(null);

    useEffect(() => {
        dispatch({ type: CHANGE_MENU, menu: 'Write'});
        inputTitle.current.focus();
    }, [dispatch]);

    const onClickSubmit = () => {
        if (!title) {
          alert('제목을 입력해주세요.');
          inputTitle.current.focus();
        } else if (!content) {
          alert('내용을 입력해주세요.');
          inputContent.current.focus();
        } else {
          item.id = id;
          item.title = title;
          item.content = content;
          item.date = formatDate(new Date());
          item.views = 0;
          dispatch({ type: ADD_ITEM, item });
          history.push(`/detail/${item.id}`);
        }
    };

    return (
        <FormBlock>
          <div className="input-box">
            <input ref={inputTitle} placeholder="title" name="title" value={title} onChange={onChangeInput} />
          </div>
          <textarea className="textarea" ref={inputContent} placeholder="content" name="content" value={content} onChange={onChangeInput} />
          <div className="btn-box">
            <span onClick={onClickSubmit}>✔</span>
            <Link to="/">⨉</Link>
          </div>
        </FormBlock>
      );
});

export default Write;