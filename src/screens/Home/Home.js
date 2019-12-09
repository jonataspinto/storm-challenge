import React,{useState} from 'react'
import {HomeContainer} from './HomeStyled'
// import {users} from '../../Shared/data'
// import Table from '../../components/Table/Table'
import { makeStyles, withStyles, createMuiTheme} from '@material-ui/core/styles';
import Header from  '../../components/Header/Header'
import Button from  '../../components/Button/ButtonElement'
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';


export default function Home () {
      
    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
          padding: theme.spacing(2),
          backgroundColor: 'red',
          '&:hover':{
              backgroundColor: 'red'
          }
        },
        buttonUniIcon: {
            margin: theme.spacing(0),
            padding: theme.spacing(2),

        }
    }));

    const [state, setState] = useState({
        right: false,
      });

    const toggleDrawer = (side) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: !state.right });
        console.log(state);
        
    };
      

    return (
        <HomeContainer>
            <Header side={state.right} handleClick={()=>toggleDrawer('right')}>
                <Box>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <Button
                            variant="contained" 
                            colors={{a:'white', b:'white'}}
                            icon="shield-alt"
                            class = {useStyles().buttonUniIcon}
                            handle = {()=> alert('I Love you')}
                        />

                        <Button
                            variant="contained" 
                            color='secondary'
                            colors={{a:'#fe6b8b', b:'#ff8e53'}}
                            icon="user"
                            class = {useStyles().buttonUniIcon}
                            handle = {()=> alert('gradient')}

                        />
                    </ButtonGroup>
                </Box>

                <Box >
                <Button
                        variant="contained" 
                        // color="secondary"
                        colors={{a:'white', b:'white'}}

                        icon="sliders-h"
                        class = {useStyles().button}
                        handle = {toggleDrawer('right')}
                    />
                    <Button
                        value="INCLUIR USUÁRIO" 
                        variant="contained" 
                        color="secondary"
                        icon="user"
                        class = {useStyles().button}
                        handle = {()=> alert('include user')}
                    />
                </Box>
            </Header>
            
        
            {/* <Table/> */}
            
        </HomeContainer>
    )
}
