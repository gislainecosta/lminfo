import React, { useState }from 'react';

import Header from '../../components/Header'
import {
    ContainerList,
    ContainerEmployee,
    Title,
    Office,
    Description
} from './styles';

import CardTravelIcon from '@material-ui/icons/CardTravel';

import EmployeeDetails from '../../components/EmployeeDetails';

import PhotoProfile from '../../assets/images/photo-profile.jpg';

const EmployeesList = () => {
    const [employees, setEmployees] = useState([
        {
            id: '1',
            name:'Gislaine', 
            surname: 'Costa Pereira',
            photo: PhotoProfile,
            office: 'Desenvolvedor Front-end',
            birthDate: '15/11/1983', 
            salary: '3500'
        },
        {
            id: '2',
            name: 'Luciano',
            surname: 'Coelho de Souza',
            photo: PhotoProfile,
            office: 'Desenvolvedor Back-end',
            birthDate: '03/01/1984',
            salary: '5500'
        },
        {
            id: '3',
            name: 'Saxa',
            surname: 'Costa',
            photo: PhotoProfile,
            office: 'Product Owner',
            birthDate: '22/02/1998',
            salary: '7000'
        },
        {
            id: '4',
            name: 'Gislaine',
            surname: 'Costa Pereira',
            photo: PhotoProfile,
            office: 'Desenvolvedor Front-end',
            birthDate: '15/11/1983',
            salary: '3500'
        },
        {
            id: '5',
            name: 'Gislaine',
            surname: 'Costa Pereira',
            photo: PhotoProfile,
            office: 'Desenvolvedor Front-end',
            birthDate: '15/11/1983',
            salary: '3500'
        },
        {
            id: '6',
            name: 'Luciano',
            surname: 'Coelho de Souza',
            photo: PhotoProfile,
            office: 'Desenvolvedor Back-end',
            birthDate: '03/01/1984',
            salary: '5500'
        }
    ]);

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
    ]);

    return(
        <ContainerList>
            <Title>Lista de Funcionários</Title>
            {offices.map((office) => {
                return <ContainerEmployee>
                    <Office>
                        <CardTravelIcon style={{ color: '#ca0000', fontSize: 32 }} />
                        &nbsp; 
                        {office.type}
                    </Office>
                    <Description><i>"{office.description}"</i></Description>
                    
                    {
                        employees.filter((employee) => {
                            return employee.office === office.type
                        }).map((employee) => {
                            return <EmployeeDetails
                                key={employee.id}
                                photo={employee.photo}
                                name={`${employee.name} ${employee.surname}`}
                                office={employee.office}
                                birthDate={employee.birthDate}
                                salary={employee.salary}
                            />
                        })
                    }
                </ContainerEmployee>
            })}
        </ContainerList>
    );
}

export default EmployeesList;