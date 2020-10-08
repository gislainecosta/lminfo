import React, { useState } from 'react';
import {
    ContainerList,
    Title,
    ContainerOffice,
    OfficeTitle,
    OfficeText
} from './styles';

import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import StorageIcon from '@material-ui/icons/Storage';
import ExtensionIcon from '@material-ui/icons/Extension';
import CardTravelIcon from '@material-ui/icons/CardTravel';

const OfficeList = () => {
    const [offices, setOffices] = useState([
        {
            id: '1',
            type: 'Product Owner',
            description: 'Responsável pela entrega do projeto, supervisiona o time de desenvolvedores, pensando sempre na qualidade do código e nas funcionalidades do produto.'
        },
        {
            id: '2',
            type: 'Desenvolvedor Front-end',
            description: 'Responsável pela interface das estruturas web, sempre pensando na experiência do usuário.'
        },
        {
            id: '3',
            type: 'Desenvolvedor Back-end',
            description: 'Responsável pela implementação da regra de negócio e criação/manutenção do banco de dados.'
        },
    ])

    const officesList = offices.map((office) => {
        let icon = ''
        switch (office.type) {
            case 'Desenvolvedor Back-end':
                icon = <StorageIcon style={{ color: '#f83333', fontSize: 55 }} />
                break;
            case 'Desenvolvedor Front-end':
                icon = <ImportantDevicesIcon style={{ color: '#f83333', fontSize: 55 }} />
                break;
            case 'Product Owner':
                icon = <ExtensionIcon style={{ color: '#f83333', fontSize: 55 }} />
                break;
            default:
                icon = <CardTravelIcon style={{ color: '#f83333', fontSize: 55 }} />
                break;
        }
        
        return <ContainerOffice key={office.id}>
            {icon}
            <OfficeTitle>{office.type}</OfficeTitle>
            <OfficeText>{office.description}</OfficeText>
        </ContainerOffice>
    })

    return(
        <ContainerList>
            <Title>Lista de Cargos</Title>
            {officesList}
        </ContainerList>
    );
}

export default OfficeList;