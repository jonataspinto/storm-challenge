import React from 'react';
import { HeaderContainer, DrawerContainer, HeaderDrawer, ListDrawer } from './HeaderStyled.js'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from  '../../components/Button/ButtonElement'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { LANG } from '../../Shared/pt'

export default function Header(props) {
  const useStyles = makeStyles(theme=>({
    buttonUniIcon: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
    theme:{
      color: 'red'
    }
  }));

  const classes = useStyles();

  const sideList = side => (
    <DrawerContainer>
      <HeaderDrawer>
        <ListItem >
          <ListItemIcon>
            <Icon className={`fa fa-sliders-h` }/>
          </ListItemIcon>
          <ListItemText primary={LANG.filters} />
        </ListItem>

        <Button
          variant="contained" 
          colors={{a:'white', b:'white'}}
          icon="times"
          class = {classes.buttonUniIcon}
          handle = { props.handleClick()}
          hide='true'
        />
      </HeaderDrawer>

      <ListDrawer>
        <ListItem>
          <ListItemText primary={LANG.descFilter}/>
        </ListItem>

        <List>
          {LANG.drawerFilter.map((text, index) => (
            <div key={index}>
              <ListItem button >
                <ListItemIcon>
                  {
                  index === 0 || index === 1 ? 
                  <Icon className={`fas fa-calendar-alt`}/> : 
                  <Icon className={`fas fa-circle`}/> 
                  }
                </ListItemIcon>
                <ListItemText className={classes.theme} primary={text}/>
              </ListItem>          
              <Divider />
            </div>
          ))}
        </List>
      </ListDrawer>
      <Button
        variant="outlined" 
        color="secondary"
        colors={{a:'transparent', b:'transparent'}}
        value={LANG.apply}
        class = {classes.buttonUniIcon}
        // disabled='disabled'
        handle = { props.handleClick()}
      />
    </DrawerContainer>
  );

  return (
    <HeaderContainer>
      {props.children}
      {props.side &&
      <Drawer anchor="right" open={props.side}>
      {sideList(props.side)}
      </Drawer>}
    </HeaderContainer>
  );
}