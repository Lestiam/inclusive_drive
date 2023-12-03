import { MdLocationOn } from 'react-icons/md';
import styled from 'styled-components';
import { InputComponent } from '../InputComponent';

const InputWithIcon = styled.div`
    display: flex;
    align-items: center;
`;

export function InputComponentWithIcon({ placeHolderText }) {
    return (
      <InputWithIcon>
        <MdLocationOn />
        <InputComponent placeHolderText={placeHolderText} />
      </InputWithIcon>
    );
  }