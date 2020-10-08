import React from 'react';

import {
    Container,
    Title,
    Dividing
} from './styles';

import IconNav from '../IconNav'

const Navigation = () => {
    return(
        <div>
            <Container>

                <Title>Funcionários</Title>
                <IconNav text={'Listar'} page={'funcionarios'}/>
                <IconNav text={'Adicionar'} page={'funcionarios/adicionar'}/>

                <Dividing />

                <Title>Cargos</Title>
                <IconNav text={'Listar'} page={'cargos'} />
                <IconNav text={'Adicionar'} page={'cargos/adicionar'} />


            </Container>
        </div>
    );
}
export default Navigation;