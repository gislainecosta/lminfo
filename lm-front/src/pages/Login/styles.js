import styled from "styled-components";

import BackgroundImage from '../../assets/images/background.png';

import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00d8ff',
            
        }
    }
});

export const InputContainer = withStyles({
    root: {
        marginBottom: '2%',
        '& > *': {
            color: '#00d8ff',
            borderRadius: '20px 20px 0 0',
        },
        '& .MuiFilledInput-root': {
            backgroundColor: 'rgba(0, 162, 255, 0.2)',
        },
        '& .MuiFilledInput-root:before': {
            borderBottom: '3px solid #4c04b8'
        }
    }
})(FormControl);

export const Input = withStyles({
    root: {
        display: 'flex',
        width: '20vw',
        height: '9vh',
        marginBottom: '5%',
        boxShadow: '0px 0px 15px #0000008F',
    }
})(FilledInput);


export const ContainerLogin = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url("${BackgroundImage}");
    background-position: center;
    background-repeat: no-repeat;
`

export const Logo = styled.img`
    width: 20vw;
    margin-bottom: 2%;
`

export const Button = styled.button`
    width: 10vw;
    height: 3vw;
    font-weight: bold;
    font-size: 1.3rem;
    background: linear-gradient(0deg, #002a32 0%, rgba(0,120,142,1) 10%, #00d8ff 30%, #00d8ff 70%, rgba(0,120,142,1) 90%, #002a32 100%);
    color: #2E0088;
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