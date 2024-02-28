import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { fontSize, spacing } from '../styles';

export const Paginate = styled(ReactPaginate)`
    font-size: ${fontSize.large};
    display: flex;
    gap: ${spacing.medium};
    justify-content: center;
    padding: ${spacing.xLarge};
`;

export const PaginatedContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;
