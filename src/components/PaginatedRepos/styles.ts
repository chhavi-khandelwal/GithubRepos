import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Paginate = styled(ReactPaginate)`
    font-size: 14px;
    display: flex;
    gap: 8px;
    justify-content: center;
    padding: 20px;
`;

export const PaginatedContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;
