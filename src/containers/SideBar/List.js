import React from 'react';
import { UISref} from '@uirouter/react';
//materialui
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
//icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/DirectionsBoat';
import ExportIcon from '@material-ui/icons/CloudDownload';
import { AmplifyAuthenticator,withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const Lists = () => {
    return (
      <List component="nav">
          <UISref to="layout.home">
          <ListItem button>
              <ListItemIcon>
               <HomeIcon />
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

          <UISref to="layout.exportar">
          <ListItem button>
              <ListItemIcon>
               <ExportIcon />
              </ListItemIcon>
              <ListItemText primary="Exportar"/>
           </ListItem>
		  </UISref>
      <AmplifySignOut buttonText="Cerrar Sesión"></AmplifySignOut>

      </List>
    )
}

export default Lists
