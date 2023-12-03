import React, { useState } from 'react';
// import './App.css';
import Navigation from './componentes/Navigation';
import Menu from './componentes/Menu';
import { Corrida } from './componentes/Corrida';
import { Pagamento } from './componentes/Pagamento';
import styled from 'styled-components';
import { Mapa } from './componentes/Mapa';
import { ChamarCorrida } from './componentes/ChamarCorrida';

const Button = styled.button`
font-family: 'Poppins-Regular';
    padding-left: 10px;
    background-color: #DDC27C;

    border-radius: 20px;
    border: 1px solid #DDC27C;

    &::hover {
    color: black;
    
    }
  `

  const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 52%;
  height: 100%;
  background: black;
  z-index: -1;
`;


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const [zoom, setZoom] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </Button>
        {isMenuOpen && <Menu />}
        {isMenuOpen && <Background onClick={closeMenu} />}
        {/* <Navigation /> */}
        <Mapa zoom={zoom}/>
      </header>
        <Corrida /> {/*Vai pá onde desgraça */}
        <ChamarCorrida />
        <Pagamento /> {/*Opções de pagamento */}
    </div>
  );
}

export default App;