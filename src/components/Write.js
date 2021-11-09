import React, { useRef, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import useInputs from '../module/useInputs';
import { ADD_ITEM, CHANGE_MENU } from '../module/boardReducer';

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
        <div className="form">
          <div className="input-box">
            <input ref={inputTitle} placeholder="title" name="title" value={title} onChange={onChangeInput} />
          </div>
          <textarea className="textarea" ref={inputContent} placeholder="content" name="content" value={content} onChange={onChangeInput} />
          <div className="btn-box">
            <span onClick={onClickSubmit}>✔</span>
            <Link to="/">⨉</Link>
          </div>
        </div>
      );
});

export default Write;