import styled from 'styled-components';

export const RepoTileContainer = styled.li`
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #d0d7de;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Heading = styled.h3`
    padding-bottom: 10px;
    margin: 0;

    &:hover {
        text-decoration: underline;
    }
`;

export const StarText = styled.span`
    font-size: 11px;
    font-weight: bold;
`;
export const BottomPanel = styled.div`
    display: flex;
    padding-top: 10px;
    gap: 20px;
    width: 100%;
`;
export const Language = styled.span`
    color: #646d76;
    font-size: 12px;
`;

export const StarCount = styled.div`
    display: flex;
    color: #646d76;
    font-size: 12px;
    gap: 4px;
    align-items: center;
`;

export const StarContainer = styled.div`
    display: flex;
    gap: 4px;
    padding: 4px 8px;
    background-color: #f3f4f6;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const Description = styled.p`
    padding-bottom: 10px;
    font-size: 14px;
    margin: 0;
    text-align: left;
    color: #646d76;
    letter-spacing: 0.01em;
`;

export const DetailSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: flex-start;
    justify-content: flex-start;
`;
