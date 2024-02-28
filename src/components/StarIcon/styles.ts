import styled from 'styled-components';

export const Star = styled.div<{ $starred: boolean }>`
    width: 10px;
    height: 10px;
    border: 1px solid;
    background-color: ${(props) => (props.$starred ? '#BF4F74' : 'white')};
`;
