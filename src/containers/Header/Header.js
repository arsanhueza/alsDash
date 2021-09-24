import React from 'react';
//materialui
import {AppBar,Toolbar, Typography,IconButton, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { Auth } from 'aws-amplify';

import MenuIcon from '@material-ui/icons/Menu';

//styles

const useStyle = makeStyles(theme => ({
	  marginBottom: "1rem", // margen opcional,
	  menuButton: {
			marginRight: '12px',
			[600]: {
				display: 'none',
			}
		},
	  title: {
		flexGrow: 1	 
	  },
	  appBar: {
		[600]: {
            width: `calc(100% - 220px)`,
            marginLeft: 240,
        }
	}
  }));

const Header = (props) => {
	//estilos

	const classes = useStyle();

	return (
		<AppBar className={classes.appBar}>
			<Toolbar>
				<IconButton 
				 color="inherit" 
				 aria-label="menu" 
				 className={classes.menuButton}
				 onClick={() => props.openAction()}>
					<MenuIcon/>
				</IconButton>
				<Typography variant="h6" className={classes.title}>
				</Typography>
				<Button variant="text" color="inherit" >
				</Button>
			</Toolbar>
		</AppBar>

	)
}

export default Header









