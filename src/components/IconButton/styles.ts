import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
    border: none;
    box-shadow: none;
    background-color: transparent;
    padding: 0;
    &:focus {
        outline: none;
    }
`;
