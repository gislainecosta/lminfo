import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import LogoImg from '../../assets/images/logo-editado.png';

import {
    ContainerLogin,
    Theme,
    Logo,
    Input,
    InputContainer
} from './styles';

const Login = () => {
    let history = useHistory();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return(
        <ThemeProvider theme={Theme}>
            <ContainerLogin>
                <Logo src={LogoImg}/>
                <InputContainer variant="filled">
                    <InputLabel htmlFor="input-email">E-mail</InputLabel>
                    <Input
                        id="input-email"
                        type='email'
                        value={values.email}
                        onChange={handleChange('email')}
                        endAdornment={
                            <InputAdornment position="end">
                                <MailIcon />
                            </InputAdornment>
                        }
                    />
                </InputContainer>
                <InputContainer variant="filled">  
                    <InputLabel htmlFor="input-password">Password</InputLabel>
                    <Input
                        id="input-password"
                        type='password'
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <VpnKeyIcon />
                            </InputAdornment>
                        }
                    />
                </InputContainer>            
                <Button click={() =>{history.push('funcionarios')}} text={'Login'}/>
            </ContainerLogin>
        </ThemeProvider>
    )
};

export default Login;