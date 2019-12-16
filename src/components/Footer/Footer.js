import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Icon from '@material-ui/core/Icon';
import {FooterContainer} from './FooterStyled'
import{ DAYS, MONTHS } from '../../Shared/pt'

const useStyles = makeStyles(theme=>({
    content:{
        // padding: theme.spacing(0),
        // minWidth: '600px',
        // backgroundColor: 'red'
        
    },
    flexChildren:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',        
        padding: '0 10px 0 10px',
        minWidth: '90px'
    },
    draftStyle:{
        color: '#ff8e53'
    },
    draftHour:{
        fontSize: '28px'
    },
    icon:{
        padding: '0 10px 0 10px',
    }
}))

const mockDate = new Date(2019,5,30)

export default function Footer() {
    const classes =  useStyles()
    const mobile = useMediaQuery('(min-width:700px)')
    const tablet = useMediaQuery('(min-width: 1036px)')

  return (
    <FooterContainer>
        <Box 
            className={classes.content} 
            display="flex" 
            alignItems="center" 
            justifyContent='space-between'
        >
            <div className={classes.flexChildren}>
                <Icon className={`far fa-dot-circle ${classes.draftStyle}`}/>
                <p className={classes.draftStyle}>NO AR</p>
            </div>

           { mobile && <div className={classes.flexChildren}>
                <Icon className={`fas fa-calendar ${classes.icon}`}/>
                <p className={classes}>ENCONTRO - 10:00</p>
            </div>}

            <div className={classes.flexChildren}>
                <Icon className={`far fa-clock ${classes.icon}`}/>
                <p className={classes}>Última atualização em 10:28</p>
            </div>
        </Box>
        
        { tablet && <Box
            className={classes.content} 
            display="flex" 
            alignItems="center" 
            justifyContent='flex-end'
        >
            <div className={classes.flexChildren}>
                <p className={classes}>
                    {`${DAYS[mockDate.getDay()]}, 
                    ${mockDate.getDate()} de 
                    ${MONTHS[mockDate.getMonth()-1]} de 
                    ${mockDate.getFullYear()}`}
                </p>
            </div>

            {tablet && <div className={classes.flexChildren}>
                <p className={`${classes.draftStyle} ${classes.draftHour}`}>// 10:30:42</p>
            </div>}
        </Box>}
    </FooterContainer>
  );
}
