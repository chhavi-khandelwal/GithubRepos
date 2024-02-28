import styled from 'styled-components';
import { spacing } from '../styles';

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: ${spacing.small};
    justify-content: center;
    border: none;
    box-shadow: none;
    background-color: transparent;
    padding: 0;
    &:focus {
        outline: none;
    }
`;
