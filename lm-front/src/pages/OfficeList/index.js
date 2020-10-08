import React, { useContext }from 'react';

import Context from '../../functions/Context';

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
    const officeContext = useContext(Context);

    const officesList = officeContext.offices.map((office) => {
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