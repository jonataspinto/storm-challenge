import React from 'react';
import { ButtonElement } from './ButtonStyled';

const Button=(props)=> {
  return (
    <ButtonElement model={props.model} onClick={props.handleAction}>
        {props.value}
    </ButtonElement >
  )
}

export default Button
