import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00d8ff',
            
        }
    }
});

export const Input = withStyles({
    root: {
        marginBottom: '2%',
        width: '80%',
        '& > *': {
            color: '#00d8ff',
            borderRadius: '10px 10px 0 0'           
        },
        '& .MuiFilledInput-multiline': {
            backgroundColor: 'rgba(0, 162, 255, 0.1)',
            height: '12vh',
        },
        '& .MuiFilledInput-multiline:before': {
            borderBottom: '3px solid #4c04b8',
        }
    }
})(TextField);