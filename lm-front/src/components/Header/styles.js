import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    background-color: #000f1c;
    padding: 0 2%;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    margin: 0;
    height: 16vh;
    position: fixed;
    top:0;
    left: 0;

    @media screen and (max-device-width: 600px) {
        padding: 0 5% 9% 4%;
        position: fixed;
    }
`;

export const Shadow = styled.div`
    height: 18vh;
    width: 100vw;
    border-radius: 25%;
    background-color: rgba(0, 0, 0, 0.4);
    filter: blur(12px);
`;

export const Logo = styled.img`
    height: 95%;
    margin-left: 5%;
`;

export const IconContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`;

export const Title = styled.p`
    font-size: 3rem;
    margin: 0;
    margin-right: 20%;
`;