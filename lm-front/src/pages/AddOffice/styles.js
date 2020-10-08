import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 18vw;
    width: 100%;
    height: 80vh
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;    
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 3rem;
    background: -webkit-linear-gradient(90deg, #480377 0%, #3c03df 20%, #02ecff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2%
`;