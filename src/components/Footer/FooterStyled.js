import styled from 'styled-components'
import {FlexContainer} from '../../Shared/Style'

export const FooterContainer = styled(FlexContainer)`
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: black;
    color: white;
    @media screen and (max-width: 1036px){
        justify-content: center;
    }
`