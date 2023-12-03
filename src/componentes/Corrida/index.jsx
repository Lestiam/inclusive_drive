import React from 'react';
// import { InputComponent } from '../InputComponent';
import { InputComponentWithIcon } from '../InputWithIcon';
import styled from 'styled-components';
import { InputComponent } from '../InputComponent';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
`;

const NavigationContainer = styled.button`
  font-family: 'Poppins-Regular';
  padding-left: 10px;
  background-color: black;
  color: #DDC27C;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid #DDC27C;
  display: flex;
  align-items: center;
  align-self: center;
  align-content: center;
    justify-content: center;
`;

export function Corrida() {
    return (
        <Container>
            <InputComponentWithIcon placeHolderText="Digite sua localização" />
            <InputComponentWithIcon placeHolderText="Digite seu destino" />
            {/* <NavigationContainer>Escolher InclusiveDrive</NavigationContainer> */}
            {/* Adicione seus itens de menu aqui */}
        </Container>
    );
}

// export default Corrida;