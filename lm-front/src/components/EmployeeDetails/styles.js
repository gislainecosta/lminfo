import styled from "styled-components";

export const EmployeeWrapper = styled.div`
    width: 100%;
    height: 32vh;
    overflow: hidden;
    border-radius: 10%;
    margin-bottom: 5%;
`

export const ContainerEmployee = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    width: 100%;
    height: 100%;
    border: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(234deg, #6f00ff 0%, #752bff 28%, #4b45ff 52%, #00d8ff 100%);
`

export const PhotoWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 11vw;
    height: 11vw;
    border-radius: 50%;
    background: transparent linear-gradient(38deg, #6f00ff 0%, #00d8ff 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 6px #6f00ff;
`

export const Photo = styled.img`
    width: 10vw;
    border-radius: 50%;
`

export const Name = styled.h3`
    font-size: 2.5rem;
`

export const DetailsSection = styled.section`
    width: 74%;
    margin-left: 2%;
`

export const ActionsIcons = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: space-around;
    width: 8%;
    height: 100%;
`

export const Details = styled.p`
    margin-left: 2%;
    font-size: 1.3rem;
`
