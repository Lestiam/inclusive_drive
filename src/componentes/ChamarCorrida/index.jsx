import React, { useState } from "react";
import styled from "styled-components";

const NavigationContainer = styled.button`
    position: fixed;
    z-index: -2;
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
    margin-top: 120px;
    margin-left: 100px;
`;
const Container = styled.div` //adicionar este div antes do botao
  position: fixed;
  top: 0;
  left: 15%;
  transform: translateX(-50%);
  z-index: -2;
`;

export function ChamarCorrida({handleClick}) {
    const [zoom, setZoom] = useState(false); // Adicione esta linha

    const handleButtonClick = () => {
        setZoom(true); // Altere esta linha
        handleClick(); // Chame a função handleClick passada como prop
    };

    return (
        <Container>
        <NavigationContainer onClick={handleButtonClick}>Escolher InclusiveDrive</NavigationContainer>
        </Container>
    );
}