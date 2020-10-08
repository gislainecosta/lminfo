import styled from "styled-components";

export const IconContainer = styled.section`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 8%;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const IconText = styled.p`
    margin-left: 10%;
`