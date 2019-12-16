import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {users} from '../../Shared/data'
import { LANG } from '../../Shared/pt'
import Icon from '@material-ui/core/Icon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from  '../../components/Button/ButtonElement'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles( theme=>({
  root: {
    width: '95%',
    margin: '15px 0px 0px 0px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      margin: '0',
    },    
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  tableBody:{
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  tableRow:{
    backgroundColor: '#d4d4d4',    
  },
  tableRowLight:{
    backgroundColor: '#f0f0f0',
  },
  status: {
    color: 'Green',
    textTransform: 'upperCase',
  },
  text:{
    textTransform: 'upperCase'
  },
  onCheck:{
    backgroundColor: 'transparent',
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    color: 'rgba(0, 0, 0, 0.26)',
    '&:hover':{
      // margin: theme.spacing(1),
      // padding: theme.spacing(0),
      backgroundColor: 'rgba(0, 0, 0, 0.56)',
      color: 'rgba(0, 0, 0, 1)',
    }
  },
  actualPage: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: 'rgb(253,89,165)',
    borderRadius: '4px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
      padding: theme.spacing(1),
    },
  },
  advancedFunctions:{
    backgroundColor: 'transparent',
    color: 'transparent',
    margin: 0,
    width: '100%',
    '&:hover': {
      color: 'black',
    },
  },
  advancedIcon:{
    margin: theme.spacing(1),
    fontSize: '15px'
  },
  extend:{
    '&:hover': {
      backgroundColor: 'white',
      color: 'transparent',
    },
  }
}));

function createData(name,  email, includDate, alterDate, rules, status, advanced, actions) {
  return { name, email, includDate, alterDate, rules, status, advanced, actions };
}

const formateDate = (date) =>{
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

const rows = users.map((user, index)=>{
  return createData(
    user.name, 
    user.email, 
    user.includDate, 
    user.alterDate, 
    user.rules, 
    user.status,
    [
      'trash', 
      'caret-square-down',
      'shield-alt',
      'pen'
    ], 
    user.actions)
})

export default function DenseTable() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)')
  
  const Navigation =() => (
    <>
      <Button
        value={matches ? `Primeiro` : '1'}
        color="secondary"
        class = {classes.button}
      />
      <Button
        value={matches && 'Anterior'}
        color="secondary"
        class = {classes.button}
        icon = {!matches && 'arrow-left'}
      />

        <span className={classes.actualPage}> 1 </span>

      <Button
        value={matches && 'Próximo'}
        color="secondary"
        disabled
        class = {classes.button}
        icon = {!matches && 'arrow-right'}
      />
      <Button
        value={matches ? 'Último' : '1'}
        disabled
        color="secondary"
        class = {classes.button}
      />
    </>
  )

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {LANG.table.map((row, index)=>{
                return <TableCell key={index}>{row}</TableCell>
              })}
            </TableRow> 
          </TableHead>
          <TableBody>
            {rows.map((row, index)=> (
              <TableRow key={index} className={ `${index % 2 ? classes.tableRow : classes.tableRowLight}  ${classes.tableBody}`}>
                <TableCell>
                  <FormControlLabel 
                    control={<Checkbox value="checkedC" className={classes.onCheck}/>}
                  />
                  </TableCell>
                <TableCell 
                  component="th" 
                  scope="row" 
                  className={classes.text}
                >{row.name}</TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell align="center">{formateDate(row.includDate)}</TableCell>
                <TableCell align="center" >{formateDate(row.includDate)}</TableCell>
                <TableCell align="center">{row.rules}</TableCell>
                <TableCell align="center" className={classes.status}>{row.status}</TableCell>
                <TableCell align="center" nowrap='noWrap' className={classes.advancedFunctions}>
                  {row.advanced.map((icon, index)=>{
                    return <Icon key={index} className={`fa fa-${icon} ${classes.advancedIcon}`}/>
                  })}
                </TableCell>
                <TableCell align="center"><Icon className={`fa fa-${row.actions}`}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {Navigation()}
    </div>
  );
}