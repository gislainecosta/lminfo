import styled from "styled-components";

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ContainerEmployee = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2%;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.4);
    background-color: #00182c;
    border-radius: 20px;
    width: 90%;
    margin-bottom: 2vw;
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 2vw;
`;

export const Office = styled.h2`
    font-size: 1.5rem;
`;

export const Description = styled.p`
    margin: 1% 0 3% 0;
    text-align: justify;
`;