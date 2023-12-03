import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.input`
    font-family: 'Poppins-Regular';
    padding-left: 10px;
    background-color: #DDC27C;
    width: 320px;
    height: 40px;
    margin: 10px;
    border-radius: 20px;
    border: 1px solid #DDC27C;

    &:placeholder {
    color: black;
    }
`

export function InputComponent({placeHolderText}) {
    const [inputText, setInputText] = useState('');
    
    const altera = (e) => {
      setInputText(e.target.value);
    };
    return (
      <div>
        <InputContainer
          type="text" 
          placeholder={placeHolderText}
          value={inputText}
          onChange={altera}
        />
      </div>
    )
  }