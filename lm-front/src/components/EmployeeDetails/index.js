import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {
    EmployeeWrapper,
    ContainerEmployee,
    PhotoWrapper,
    Photo,
    Name,
    Details,
    DetailsSection,
    ActionsSection,
    Actions,
    ActionsIcons
} from './styles';

const EmployeeDetails = (props) => (
    <EmployeeWrapper>
        <ContainerEmployee>
            <PhotoWrapper><Photo src={props.photo} alt='Foto-perfil'/></PhotoWrapper>
            <DetailsSection>
                <Name>{props.name}</Name>
                <Details><b>Data de Nascimento:</b> {props.birthDate}</Details>
                <Details><b>Salário:</b> R$ {props.salary},00</Details>
            </DetailsSection>
    
            <ActionsSection>
                <Actions>Ações</Actions>
                <ActionsIcons>
                    <EditIcon 
                        style={{
                            fontSize: 40,
                            cursor: 'pointer',
                            margin: '5% 10%'
                        }}
                    />
                    <DeleteForeverIcon 
                        style={{
                            fontSize: 40,
                            cursor: 'pointer', 
                            margin: '5% 10%'
                        }}
                    />
                </ActionsIcons>
            </ActionsSection>
        </ContainerEmployee>
    </EmployeeWrapper>
);

export default EmployeeDetails;