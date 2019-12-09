import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const ButtonContainer  = styled(Button)`
    &&{
        background: ${props=> props.colors && `linear-gradient(45deg, ${props.colors.a} 30%, ${props.colors.b} 90%)`};
        /* color: white; */
    }
`