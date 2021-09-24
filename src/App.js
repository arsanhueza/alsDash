import React from 'react';
//uiRouter
import { UIRouter, pushStateLocationPlugin} from '@uirouter/react';
//components
import Home from './components/home/Home';
import Embarques from './components/embarques/Embarques';
import Exportar from './components/exportar/Exportar'
import Layout from './containers/Layout/Layout';
//materialui
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './config/themeConfig'
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator,withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import awsExports from "./aws-exports";

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
    name : 'layout.embarques',
    url  : '/embarques',
    component : Embarques
  },{
    name : 'layout.exportar',
    url  : '/exportar',
    component : Exportar
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
