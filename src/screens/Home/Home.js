import React,{useState} from 'react'
import {HomeContainer} from './HomeStyled'
import {LANG} from '../../Shared/pt'
import Table from '../../components/Table/Table'
import { makeStyles } from '@material-ui/core/styles';
import Header from  '../../components/Header/Header'
import Button from  '../../components/Button/ButtonElement'
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      backgroundColor: 'rgb(253,89,165)',
      '&:hover':{
          backgroundColor: 'rgb(253,75,150)'
      }
    },
    buttonUniIcon: {
        margin: theme.spacing(0),
        padding: theme.spacing(2),
    },
    headerGroup:{
        display: 'flex',
        alignItems: 'center',
        margin: theme.spacing(1),
    },
    divider: {
        height: 28,
        // margin: 4,
        margin: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    inputContainer:{
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(1),
    },
    input: {
        flex: 1,
        padding: theme.spacing(1),

    },
}))

export default function Home () {
    const classes = useStyles();

    const [state, setState] = useState({
        right: false,
    })

    const toggleDrawer = (side) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }    
        setState({ ...state, [side]: !state.right })
        console.log(state)        
    };
      

    return (
        <HomeContainer>
            <Header side={state.right} handleClick={()=>toggleDrawer('right')}>
                <Box className={classes.headerGroup}>
                    <Button
                        variant="contained" 
                        color='secondary'
                        colors={{a:'#fe6b8b', b:'#ff8e53'}}
                        icon="chart-bar"
                        class = {classes.buttonUniIcon}
                        handle = {()=> alert('gradient')}
                        hide = {'true'}
                    />

                    <Divider className={classes.divider} orientation="vertical" />

                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <Button
                            variant="contained" 
                            colors={{a:'white', b:'white'}}
                            icon="shield-alt"
                            class = {classes.buttonUniIcon}
                            hide = {'true'}
                        />

                        <Button
                            variant="contained" 
                            color='secondary'
                            colors={{a:'#fe6b8b', b:'#ff8e53'}}
                            icon="user"
                            class = {classes.buttonUniIcon}
                            handle = {()=> alert('gradient')}
                            hide = {'true'}
                        />
                    </ButtonGroup>

                    <Paper className={classes.inputContainer}>
                        <InputBase
                            className={classes.input}
                            placeholder={LANG.search}
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" className={classes.buttonUniIcon} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box>

                <Box className={classes.headerGroup}>
                    <Button
                        variant="contained" 
                        // color="secondary"
                        colors={{a:'white', b:'white'}}

                        icon="sliders-h"
                        class = {classes.button}
                        handle = {toggleDrawer('right')}
                    />
                    <Button
                        value={LANG.includeUser} 
                        variant="contained" 
                        color="secondary"
                        icon="user"
                        class = {classes.button}
                        handle = {()=> alert('include user')}
                        hide={'true'}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <>
                        <Button
                            icon="home"
                            hide={'true'}
                        />
                        <Button
                            icon="cog"
                            hide={'true'}
                        />
                        <Button
                            icon="power-off"
                            hide={'true'}
                        />
                    </>
                </Box>
            </Header>            
        
            <Table/>
            
        </HomeContainer>
    )
}
