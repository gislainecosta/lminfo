import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import CakeIcon from '@material-ui/icons/Cake';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import {
    EmployeeWrapper,
    ContainerEmployee,
    PhotoWrapper,
    Photo,
    Name,
    Details,
    DetailsSection,
    ActionsIcons
} from './styles';

const EmployeeDetails = (props) => (
    <EmployeeWrapper>
        <ContainerEmployee>
            <PhotoWrapper><Photo src={props.photo} alt='Foto-perfil'/></PhotoWrapper>
            <DetailsSection>
                <Name>{props.name}</Name>
                <Details>
                    <CakeIcon style={{ color: '#f83333', fontSize: 24, marginRight: '1%' }} />
                    {props.birthDate}
                </Details>
                <Details>
                    <MonetizationOnIcon style={{ color: '#f83333', fontSize: 24, marginRight: '1%' }} />
                    R$ {props.salary},00
                </Details>
            </DetailsSection>
    
            <ActionsIcons>
                <EditIcon 
                    style={{
                        fontSize: 40,
                        cursor: 'pointer',
                    }}
                />
                <DeleteForeverIcon 
                    style={{
                        fontSize: 40,
                        cursor: 'pointer', 
                    }}
                />
            </ActionsIcons>

        </ContainerEmployee>
    </EmployeeWrapper>
);

export default EmployeeDetails;