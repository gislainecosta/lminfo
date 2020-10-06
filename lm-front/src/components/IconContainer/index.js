import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    IconContainer,
} from './styles';

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ViewListIcon from '@material-ui/icons/ViewList';



const IconHeader = (props) => {
    let history = useHistory();
    let icon = ''

    const goToPage = (page) =>{
        console.log(`/${page}`)
    }

    switch (props.text) {
        case 'Adicionar':
            icon = <PersonAddIcon style={{ fontSize: 45 }} />
            break;
        
        case 'Listar':
            icon = <ViewListIcon style={{ fontSize: 45 }} />
            break;
        default:
            icon = <ExitToAppIcon style={{ fontSize: 50 }} />
            break;
    }

    console.log(props.page)

    return(
        <IconContainer onClick={() => {goToPage(props.page)}}>
            {icon}
            <p>{props.text}</p>
        </IconContainer>
    )
};

export default IconHeader;