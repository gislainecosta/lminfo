import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    HeaderContainer,
    HeaderWrapper,
    Shadow,
    Logo,
    IconContainer,
    Photo
} from './styles';

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import ImgLogo from '../../assets/images/logo-editado.png';
import Profile from '../../assets/images/photo-profile2.jpg';

const Header = () => {
    let history = useHistory();

    const goToPage = () => {
        history.push('/')
    }

    return(
        <HeaderWrapper>
            <HeaderContainer>
                <Logo src={ImgLogo} alt="Logo" />
                <Photo src={Profile} alt='Foto Perfil'/>
                <IconContainer onClick={goToPage}>
                    <ExitToAppIcon style={{ color: '#4b03e6', fontSize: 50 }}/>
                </IconContainer>
            </HeaderContainer>
            <Shadow />
        </HeaderWrapper>
    );
}
export default Header;