import React, { useRef, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { CHANGE_MENU, UPDATE_ITEM } from '../module/boardReducer';
import useInputs from '../module/useInputs';
import { getLocalItem } from '../utils';
import Error from '../container/Error';
import './form.css';

const Update = memo(({ dispatch, match, history }) => {
    const item = getLocalItem(match.params.id);
    const [state, onChangeInput] = useInputs({
        title: item ? item.title : '',
        content: item ? item.content : '',
    });
    const { title, content } = state;
    const inputTitle = useRef(null);
    const inputContent = useRef(null);

    useEffect(() => {
        dispatch({ type: CHANGE_MENU, menu: 'Update' });
        if(inputTitle.current) {
            inputTitle.current.focus();
        }
    }, [dispatch]);

    const onClickSubmit = () => {
        if (!title) {
            alert('제목을 입력해주세요.');
            inputTitle.current.focus();
        } else if (!content) {
            alert('내용을 입력해주세요.');
            inputTitle.current.focus();
        } else {
            item.title = title;
            item.content = content;
            dispatch({ type: UPDATE_ITEM, item });
            history.push(`/read/${item.id}`);
        }
    };

    return (
        <>
            { item ? (
                <div className='form'>
                    <div className="input-box">
                        <input ref={inputTitle} placeholder="제목" name="title" value={title} onChange={onChangeInput} />
                    </div>
                    <textarea className="textarea" ref={inputContent} placeholder="content" name="content" value={content} onChange={onChangeInput}/>
                    <div className="btn-box">
                        <span onClick={onClickSubmit}>✔</span>
                        <Link to="/">✖</Link>
                    </div>
                </div>
            ) : (
                <Error />
            )}
        </>
    );
});

export default Update;