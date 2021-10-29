import { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid gray;
    margin-bottom: 2rem;
    width: 100%;
`;

const BodyInput = styled.input`
    font-size: 1.5rem;
    outline: none;
    padding-top: 0.5rem;
    border: none;
    width: 100%;
`;

const Editor = ({ title, body, user, password, onChangeField }) => {

    const onChangeTitle = e => {    // 나중에 onChangeInput으로 통합할 것
        onChangeField({ key: 'title', value: e.target.value });
    };
    
    const onChangeBody = e => {
        onChangeField({ key: 'body', value: e.target.value });
    };

    return (
        <EditorBlock>
            <TitleInput
                placeholder="제목을 입력하세요"
                onChange={onChangeTitle}
                value={title}
            />
            <BodyInput
                placeholder="내용을 입력하세요"
                onChange={onChangeBody}
                value={body}
            />
        </EditorBlock>
    );
};

export default Editor;
