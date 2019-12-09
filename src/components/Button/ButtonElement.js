import React from 'react';
import Icon from '@material-ui/core/Icon';
import { ButtonContainer } from './ButtonStyled'

export default function ButtonElement(props) {  
    return (
        <ButtonContainer
        variant={props.variant}
        color={props.color}
        colors={props.colors}
        className={props.class}
        startIcon={props.value && <Icon className={`fas fa-${props.icon}`}/>}
        onClick={props.handle}
        disabled={props.disabled}
        >   
        {props.value || <Icon className={`fas fa-${props.icon}`}/>}
        </ButtonContainer>
    );
}
