import styled from 'styled-components';
import { colors, fontSize, spacing } from '../styles';

export const FilterBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${spacing.xLarge};
    align-items: flex-start;
    width: 30%;
`;

export const Heading = styled.h3`
    color: ${colors.text};
    margin: 0;
`;

export const SubHeading = styled.h5`
    color: ${colors.text};
    padding: ${spacing.large} 0;
    margin: 0;
`;

export const InputGroup = styled.div`
    display: flex;
    gap: ${spacing.small};
`;

export const Label = styled.label`
    font-size: ${fontSize.medium};
`;
