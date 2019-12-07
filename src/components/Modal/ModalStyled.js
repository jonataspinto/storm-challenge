import styled from 'styled-components'
import {FlexContainer} from '../../Shared/Style'

export const ModalContainer = styled(FlexContainer)`
    background-color: red;
    position: fixed;
    top: 0;
    right: ${props => props.showModal ? 0 : "-100vw"};
    transition: .3s;
    width: 50vw;
`