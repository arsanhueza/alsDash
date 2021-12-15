import React from 'react';
import { UISref} from '@uirouter/react';
//materialui
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
//icons
import Button from "@material-ui/core/Button";

import HomeIcon from '@material-ui/icons/Assignment';
import InfoIcon from '@material-ui/icons/AssignmentTurnedIn';
import ExportIcon from '@material-ui/icons/CloudDownload';
import { AmplifyAuthenticator,withAuthenticator } from "@aws-amplify/ui-react";

import { Header } from "../../loginUi/Header";
import { Footer } from "../../loginUi/Footer";
import { SignInHeader } from "../../loginUi/SignInHeader";
import { SignInFooter } from "../../loginUi/SignInFooter";
import "../../loginUi/styles.css";

export function Lists({ signOut, user }) {

      return (
      <List component="nav">
          <UISref to="layout.home">
          <ListItem button>
              <ListItemIcon>
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Guías"/>
           </ListItem>
		  </UISref>

          <UISref to="layout.productos">
          <ListItem button>
              <ListItemIcon>
               <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Productos"/>
           </ListItem>
		  </UISref>
      <main>
      <Button style={{margin: '0 auto', display: "flex"}} size='large' variant="contained" onClick={signOut}>
        Cerrar Sesión
      </Button>
      </main>
            </List>
    )
}

export default withAuthenticator(Lists, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});
