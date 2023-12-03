import React from 'react';
import { Navigation } from '../Navigation';
import { InputComponent } from '../InputComponent';
import logo from './../../img/logo.png';
import styled from 'styled-components';

const Logo = styled.img`
  position: relative;
  right: 41px;
  transform: scale(0.8);
`;

function Menu() {
    return (
        <div>
            <h2>Menu</h2>
            <Logo src={logo} alt="Logo" />
            <Navigation />
            {/* <InputComponent placeHolderText="Digite aqui" /> */}
            {/* Adicione seus itens de menu aqui */}
        </div>
    );
}

export default Menu;