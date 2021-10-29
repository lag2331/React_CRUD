import styled from "styled-components";

const StyledButton = styled.button`
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: black;
    &:hover{
        background: grey;
    }
`;

const Button = props => <StyledButton {...props} />;

export default Button;