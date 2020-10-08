import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100vw;
    overflow-x: hidden;

    @media screen and (max-device-width: 600px) {
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #000f1c;
    padding: 0 2%;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
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
    width: 100%;
    z-index: 90;
    position: fixed;
    top:0;
    left: 0;
    border-radius: 25%;
    background-color: rgba(0, 0, 0, 0.9);
    filter: blur(12px);
`;

export const Logo = styled.img`
    height: 95%;
    margin: 0 60% 0 5%;
`;

export const IconContainer = styled.section`
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const Photo = styled.img`
    width: 5.4vw;
    border-radius: 50%;
    border: 4px solid #4b03e6
`;
