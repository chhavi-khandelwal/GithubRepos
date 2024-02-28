import styled from 'styled-components';
import { colors, fontSize, spacing } from '../styles';

export const RepoTileContainer = styled.li`
    display: flex;
    padding: ${spacing.xLarge} 0;
    border-bottom: 1px solid ${colors.border};
    justify-content: space-between;
    align-items: flex-start;
`;

export const Heading = styled.h3`
    padding-bottom: ${spacing.large};
    margin: 0;

    &:hover {
        text-decoration: underline;
    }
`;

export const StarText = styled.span`
    font-size: ${fontSize.small};
    font-weight: bold;
`;
export const BottomPanel = styled.div`
    display: flex;
    padding-top: ${spacing.large};
    gap: ${spacing.xLarge};
    width: 100%;
`;
export const Language = styled.span`
    color: ${colors.text};
    font-size: ${fontSize.xMedium};
`;

export const StarCount = styled.div`
    display: flex;
    color: ${colors.text};
    font-size: ${fontSize.xMedium};
    gap: ${spacing.small};
    align-items: center;
`;

export const StarContainer = styled.div`
    display: flex;
    gap: ${spacing.small};
    padding: ${spacing.small} ${spacing.medium};
    background-color: ${colors.background};
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const Description = styled.p`
    padding-bottom: 10px;
    font-size: ${fontSize.large};
    margin: 0;
    text-align: left;
    color: ${colors.text};
    letter-spacing: 0.01em;
`;

export const DetailSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: flex-start;
    justify-content: flex-start;
`;
