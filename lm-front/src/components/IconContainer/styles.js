import styled from "styled-components";

export const IconContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;