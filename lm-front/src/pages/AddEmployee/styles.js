import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const InputNumber = withStyles({
    root: {
        marginBottom: '2%',
        width: '50%',
        backgroundColor: 'rgba(0, 162, 255, 0.1)',
        borderRadius: '10px 10px 0 0',
        '& > *': {
            color: '#00d8ff',
        },
        '& .MuiFilledInput-input': {
            marginTop: '8%'
        }
    }
})(TextField);

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 18vw;
    width: 100%;
    min-height: 80vh
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 42vh;
    align-items: center;
    justify-items: center;
    margin-bottom: 5%;
`;


export const Title = styled.h1`
    font-size: 3rem;
    background: -webkit-linear-gradient(90deg, #480377 0%, #3c03df 20%, #02ecff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2%
`;

export const DropContainer = styled.section`
    grid-area: 1/1/3/2;
    background-color: rgba(0, 162, 255, 0.1);
    width: 90%;
    height: 90%;
    border-radius: 15px
`;
