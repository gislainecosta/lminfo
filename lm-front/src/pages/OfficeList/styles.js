import styled from "styled-components";

export const ContainerList = styled.div`
    display: grid;
    align-items: start;
    justify-items: center;
    margin-left: 18vw;
    grid-template-columns: repeat(3, 1fr)
`;

export const ContainerOffice = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.4);
    background-color: #00111f;
    border-radius: 20px;
    width: 90%;
    padding: 4%
`;

export const Title = styled.h1`
    font-size: 3rem;
    background: -webkit-linear-gradient(90deg, #480377 0%, #3c03df 20%, #02ecff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    grid-area: 1/1/2/4;
    margin-bottom: -10%
`;

export const OfficeTitle = styled.p`
    font-size: 1.8rem;
    line-height: 1.2;
    text-align: center;
    margin: 4%;
`;

export const OfficeText = styled.p`
    font-size: 0.9rem;
    text-align: center
`;