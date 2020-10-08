import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    IconContainer,
    IconText
} from './styles';

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ViewListIcon from '@material-ui/icons/ViewList';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import QueueIcon from '@material-ui/icons/Queue';

const IconNav = (props) => {
    let history = useHistory();
    let icon = ''

    const goToPage = (page) =>{
        history.push(`/${page}`)
    }

    switch (props.page) {
        case 'funcionarios':
            icon = <ViewListIcon style={{ fontSize: 35 }} />
            break;
        
        case 'funcionarios/adicionar':
            icon = <PersonAddIcon style={{ fontSize: 35 }} />
            break;

        case 'cargos':
            icon = <FormatListBulletedIcon style={{ fontSize: 35 }} />
            break;

        default:
            icon = <QueueIcon style={{ fontSize: 35 }} />
            break;
    }

    return(
        <IconContainer onClick={() => {goToPage(props.page)}}>
            {icon}
            <IconText>{props.text}</IconText>
        </IconContainer>
    )
};

export default IconNav;