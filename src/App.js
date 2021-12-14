import React from 'react';
//uiRouter
import { UIRouter, pushStateLocationPlugin} from '@uirouter/react';
//components
import Home from './components/home/Home';
import Productos from './components/productos/Productos';

import Exportar from './components/exportar/Exportar'
import Layout from './containers/Layout/Layout';
//materialui
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './config/themeConfig'
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator,withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";

import { AmplifyTheme } from 'aws-amplify';

Amplify.configure(awsExports);

//states de ruta
const states = [
  {
    name : 'layout',
    component : Layout
  },
  {
    name : 'layout.home',
    url  : '/',
    component : Home
  },{
    name : 'layout.productos',
    url  : '/productos',
    component : Productos
  }
]

const plugins = [
  pushStateLocationPlugin
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UIRouter plugins={plugins} states={states}>
        <Layout />
      </UIRouter>
    </ThemeProvider>
  )
}


export default withAuthenticator(App,true);
