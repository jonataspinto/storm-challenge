import styled from 'styled-components'
import {FlexContainer } from '../../Shared/Style'

export const HeaderContainer =  styled(FlexContainer)`
    justify-content: space-between;
    align-items: center;
    background-color: #f4f4f4;
    width: 100%;
`
export const DrawerContainer = styled(FlexContainer)`
    flex-direction: column;
    background-color: #CCC;
    width: 450px;
    height: 100vh;
`
export const HeaderDrawer = styled(FlexContainer)`
    justify-content: space-between;
    background-color: #FFF;
`
export const ListDrawer = styled(FlexContainer)`
    flex-direction: column;
    width: 100%;
`