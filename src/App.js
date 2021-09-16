import React from 'react';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Home from './Home.js';
import ResponsiveDrawer from './Side.js';
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { positions } from '@material-ui/system';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className="app">
      <Home />
      <Avatar className={classes.purple}>AM</Avatar>
      <AmplifySignOut buttonText="Cerrar Sesión"></AmplifySignOut>
      <ResponsiveDrawer />
    </div>
  );
}
export default withAuthenticator(App, true);
