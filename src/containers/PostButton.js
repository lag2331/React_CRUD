import styled from 'styled-components';
import Button from '../components/common/Button';
import axios from '../../node_modules/axios/index';

const PostButton = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
        margin-left: .5rem;
    }
`;

const StyledButton = styled(Button)`
    height: 2.125rem;
    & + & {
        margin-left: .5rem;
    }
`;

const onPost = () => {
    axios.post('/api/posts',{
        title: 'onPost',
        body: 'onPost',
        user: 'onPost',
        password: 'onPost',
    });
}

const WriteAction = () => {
    return (
        <PostButton>
            <StyledButton onClick={onPost}>
                onPost
            </StyledButton>
        </PostButton>
    );
};

export default WriteAction;