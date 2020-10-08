import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import {
    Input,
    Theme
} from './styles';

const InputText = (props) => {
    return(
        <ThemeProvider theme={Theme}>
            <Input
                label={props.placeholder}
                multiline
                rows={props.name === 'description' ? 4 : 1}
                value={props.value}
                onChange={props.change}
                variant="filled"
            />          
        </ThemeProvider>
    )
}

export default InputText;