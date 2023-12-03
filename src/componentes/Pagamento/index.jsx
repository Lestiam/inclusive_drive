import React, { useState } from 'react';
import styled from 'styled-components';

const BotaoPagamento = styled.button`
  font-family: 'Poppins-Regular';
  padding-left: 10px;
  background-color: #DDC27C;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid #DDC27C;

  &:hover {
    color: black;
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
   z-index: -2;
`;

const OpcoesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Pagamento() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Selecionar forma de pagamento');
  const opcoes = ['Dinheiro', 'Cartão', 'Pix'];

  const handleSelect = (opcao) => {
    setSelectedOption(opcao);
    setIsOpen(false);
  };

  return (
    <Container>
      <BotaoPagamento onClick={() => setIsOpen(!isOpen)}>{selectedOption}</BotaoPagamento>
      {isOpen && (
        <OpcoesContainer>
          {opcoes.map((opcao, index) => (
            <BotaoPagamento key={index} onClick={() => handleSelect(opcao)}>
              {opcao}
            </BotaoPagamento>
          ))}
        </OpcoesContainer>
      )}
    </Container>
  );
}