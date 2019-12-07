import styled, {css} from 'styled-components'
import{ lighten, darken } from 'polished'

const colors ={
    default: '#c9f4a6',
    primary: '#a6f4c9',
    danger: darken(0.15, '#ff0000'),
    dark: lighten(0.02, '#000000')
}

export const ButtonElement = styled.button`
    background-color: ${colors.default};
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: ${colors.dark};
    text-transform: capitalize;
    &:active{
        background-color: ${lighten (0.05, colors.default)}
    } 

    ${props=> 
       props.model === 'primary' &&
       css`
        background-color: ${colors.primary};
        &:active{
            background-color: ${lighten (0.05, colors.primary)}
        } 
       `
    }

    ${props=> 
        props.model === 'danger' &&
        css`
            background-color: ${colors.danger};
            color: white;
            &:active{
                background-color: ${lighten (0.05, colors.danger)}
            } 
        `
    }

    ${props=> 
        props.model === 'dark' &&
        css`
            background-color: ${colors.dark};
            color: white;
            &:active{
                background-color: ${lighten (0.04, colors.dark)}
            } 
        `
    }
`