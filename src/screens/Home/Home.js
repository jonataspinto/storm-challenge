import React, { Component } from 'react'
import {HomeContainer} from './HomeStyled'
import Modal from '../../components/Modal'
import Button from '../../components/Button'

export default class Home extends Component {
    state={
        showModal: false,
    }

    toggleModal =()=>{
        this.setState({showModal : !this.state.showModal})     
        console.log(this.state.showModal);
           
    }

    render() {
        const {showModal} = this.state
        return (
            <HomeContainer>
                <p>Hello</p>
                <Button handleAction={this.toggleModal} value={'modal Win!'}/>
                <Button model="primary" handleAction={this.toggleModal} value='modal Win!'/>
                <Button model="danger" handleAction={this.toggleModal} value='modal Win!'/>
                <Button close value='X'/>
                <Modal showModal={showModal}></Modal>
            </HomeContainer>
        )
    }
}
