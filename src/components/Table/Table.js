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

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  active: {
    color: 'Green',
    textTransform: 'upperCase'
  },
  text:{
    textTransform: 'upperCase'
  }
});

function createData(name,  email, includDate, alterDate, rules, status, actions) {
  return { name, email, includDate, alterDate, rules, status, actions };
}

const formateDate = (date) =>{
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

const rows = users.map((user, index)=>{
  return createData(user.name, user.email, user.includDate, user.alterDate, user.rules, user.status, user.actions)
})

export default function DenseTable() {
  const classes = useStyles();
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
              <TableRow key={index}>
                <TableCell 
                  component="th" 
                  scope="row" 
                  className={classes.text}
                >{row.name}</TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell align="center">{formateDate(row.includDate)}</TableCell>
                <TableCell align="center" >{formateDate(row.includDate)}</TableCell>
                <TableCell align="center">{row.rules}</TableCell>
                <TableCell align="center" className={classes.active}>{row.status}</TableCell>
                <TableCell align="center"><Icon className={`fa fa-${row.actions}`}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}