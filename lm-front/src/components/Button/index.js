import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import {
    ButtonStyle
} from './styles';

const Button = (props) => (
    <ButtonStyle onClick={props.click}>{props.text}</ButtonStyle>        
)


export default Button;