import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.button`
  font-family: 'Poppins-Regular';
  padding-left: 10px;
  background-color: #DDC27C;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid #DDC27C;

  &::hover {
    color: black;
  }
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export function Navigation() {
    return (
        <Nav>
            <NavigationContainer>Home</NavigationContainer>
            <NavigationContainer>Perfil</NavigationContainer>
            <NavigationContainer>Avaliação do Motorista</NavigationContainer>
            <NavigationContainer>Suporte</NavigationContainer>
            <NavigationContainer>Corrida</NavigationContainer>
        </Nav>
    );
}

// export default Navigation;