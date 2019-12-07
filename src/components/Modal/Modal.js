import React from 'react'
import { ModalContainer } from './ModalStyled'
const Modal=(props)=> {
    return (
        <ModalContainer showModal={props.showModal}>
            Your Modal Win!
        </ModalContainer>
    )
}

export default Modal