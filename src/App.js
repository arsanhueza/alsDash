import React from 'react';
//uiRouter
import { UIRouter, pushStateLocationPlugin} from '@uirouter/react';
//components
import Home from './components/home/Home';
import Productos from './components/productos/Productos';
import { translations } from '@aws-amplify/ui';
import { I18n } from 'aws-amplify';
import Exportar from './components/exportar/Exportar'
import Layout from './containers/Layout/Layout';
//materialui
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './config/themeConfig'
import Amplify from 'aws-amplify';
import awsExports from "./aws-exports";
import { AmplifyTheme } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./loginUi/Header";
import { Footer } from "./loginUi/Footer";
import { SignInHeader } from "./loginUi/SignInHeader";
import { SignInFooter } from "./loginUi/SignInFooter";
import "./loginUi/styles.css";
Amplify.configure(awsExports);

I18n.putVocabulariesForLanguage('es', {
  'Sign In': 'Ingresar', // Tab header
  'Sign in': 'Ingresar', // Button label
  'Create Account': 'Crear Cuenta', // Button label
  'Signing in': 'Ingresando...',
  Username: 'Usuario', // Username label
  Password: 'Contraseña', // Password label
  'Confirm Password': 'Confirma la contraseña'
});

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



export function App({ signOut, user }) {
  return (
    <ThemeProvider theme={theme}>
      <UIRouter plugins={plugins} states={states}>
        <Layout />
      </UIRouter>
    </ThemeProvider>
  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});
