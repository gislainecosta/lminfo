import styled from "styled-components";

export const EmployeeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 30vh;
    margin-bottom: 2%;
    border-radius: 20px;
    background: transparent linear-gradient(138deg, #0ad9e7 0%, #11749d 40%, #dd0e05 100%) 0% 0% no-repeat padding-box;
`

export const ContainerEmployee = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    padding: 2%;
    width: 99%;
    height: 94%;
    background-color: #00182c;
`

export const PhotoWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 11vw;
    height: 11vw;
    border-radius: 50%;
    background: transparent linear-gradient(138deg, #890058 0%, #2700bd 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 12px #69fef2;
`

export const Photo = styled.img`
    width: 10vw;
    border-radius: 50%;
`

export const Name = styled.h3`
    font-size: 2.5rem;
`

export const DetailsSection = styled.section`
    width: 70%;
    margin-left: 2%;
`

export const ActionsSection = styled.section`
    width: 15%;
    margin-right: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ActionsIcons = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Details = styled.p`
    margin-left: 2%;
    font-size: 1.3rem;
`

export const Actions = styled.h3`
    font-size: 1.6rem;
`

