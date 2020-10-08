import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 18vw;
    padding: 1%;
    justify-content: flex-start;
    align-items: flex-start;
    border-left: none !important;
    border-width: 3px;
    border-style: solid;
    border-image: 
        linear-gradient(
        to bottom, 
        white, 
        black
        ) 1 100%;
    border-image-source: linear-gradient(0deg, rgba(0,15,28,1) 0%, rgb(86,1,255) 51%, rgb(13,218,232) 100%);

    @media screen and (max-device-width: 600px) {
    }
`;

export const Title = styled.h1`
    font-size: 1.7rem;
    margin-bottom: 10%;
    color: #695bf2;

    @media screen and (max-device-width: 600px) {
    }
`;

export const Dividing = styled.hr`
    width: 100%;
    border: none;
    height: 3px;
    background-image: linear-gradient(90deg, rgb(0,15,28) 0%, rgb(29,5,77) 10%, rgb(13,218,232) 51%, rgb(29,5,77) 90%, rgb(0,15,28) 100%);
    margin: 15% 0 10% 0;
`
