import React from 'react';

import {
    Container,
    Shadow,
    Logo,
    Title
} from './styles';

import IconHeader from '../IconContainer'

import ImgLogo from '../../assets/images/logo-editado.png';

const Header = () => {
    return(
        <div>
            <Container>
                <Logo src={ImgLogo} alt="Logo" />

                <Title>Funcionários</Title>

                <IconHeader text={'Listar'} page={'lista-de-funcionarios'}/>

                <IconHeader text={'Adicionar'} page={'adicionar-funcionario'}/>

                <IconHeader text={'Sair'} page={''} />
            </Container>
            <Shadow />
        </div>
    );
}
export default Header;