import React from 'react';
import { ButtonElement } from './ButtonStyled';

const Button=(props)=> {
  return (
    <ButtonElement model={props.model} onClick={props.handleAction} close={props.close}>
        {props.value}
    </ButtonElement >
  )
}

export default Button
