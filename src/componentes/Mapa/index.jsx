import React, { useState } from 'react';
import styled from "styled-components";
import mapa from './../../img/mapa.png';


const MapaFixado = styled.img`
position: fixed;
z-index: -4;
top: 120px;
transform: ${props => props.zoom ? 'scale(2.0)' : 'scale(1.45)'};
`

const BotaoInvisivel = styled.button`
    position: fixed;
    display: flex;
    align-items: center;
    align-self: center;
    align-content: center;
    justify-content: center;
    margin-top: 120px;
    margin-left: 130px;
    opacity: 0;

`;

const Container = styled.div` //adicionar este div antes do botao
  position: fixed;
  top: 0;
  left: 15%;
  transform: translateX(-50%);
`;

export function Mapa() {
    const [zoom, setZoom] = useState(false);
    const handleButtonClick = () => {
        setZoom(true);
      };
    return (
        <>
        <MapaFixado src={mapa} alt="Mapa" zoom={zoom} />
        <Container>
            <BotaoInvisivel onClick={handleButtonClick}>Zoom in</BotaoInvisivel>
        </Container>
        </>
    );
}