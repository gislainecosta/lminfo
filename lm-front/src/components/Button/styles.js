import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 10vw;
    height: 3vw;
    font-weight: bold;
    font-size: 1.3rem;
    background: linear-gradient(0deg, #002a32 0%, rgba(0,120,142,1) 10%, #00d8ff 30%, #00d8ff 70%, rgba(0,120,142,1) 90%, #002a32 100%);
    color: #2E0088;
    margin-bottom: 5%;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 15px #0000008F;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.9);
    }

    &:focus{
      outline: 0;
    }
`