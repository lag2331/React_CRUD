import { useRef, useEffect } from 'react';
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

const UserInput = styled.input`
    font-size: 1.5rem;
    outline: none;
    padding-top: 0.5rem;
    border: none;
    width: 20%;
`;

const PasswordInput = styled.input`
    font-size: 1.5rem;
    outline: none;
    padding-top: 0.5rem;
    border: none;
    width: 20%;
`;

const Editor = ({ title, body, user, password, onChangeField }) => {

    const onChangeTitle = e => {    // 나중에 onChangeInput으로 통합할 것
        onChangeField({ key: 'title', value: e.target.value });
    };
    
    const onChangeBody = e => {
        onChangeField({ key: 'body', value: e.target.value });
    };
    
    const onChangeUser = e => {
        onChangeField({ key: 'user', value: e.target.value });
    };
    
    const onChangePassword = e => {
        onChangeField({ key: 'password', value: e.target.value });
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
            <UserInput
                placeholder="ID"
                onChange={onChangeUser}
                value={user}
            />
            <PasswordInput
                placeholder="****"
                onChange={onChangePassword}
                value={password}
            />
        </EditorBlock>
    );
};

export default Editor;
