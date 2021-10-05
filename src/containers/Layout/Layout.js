import React, { useState } from 'react';
import Header from '../Header/Header';
//uiRouter
import { UIView } from '@uirouter/react';
//materialui
import SideBar from '../SideBar/index';
import { makeStyles } from '@material-ui/styles';
import {Hidden} from '@material-ui/core'
import red from '@material-ui/core/colors/red';


//styles
const styles = makeStyles(theme => ({
	root:{
		display: 'flex'
	},
	toolbar:{
		minHeight:6,
	},
    content:{
    flexGrow: 1,
		backGroundColor: red,
		padding: '24px'
	}

}))

const Layout = () => {

	//styles
	const classes = styles()

	const [open, setOpen] = useState (false)

    //function open sidebar
	const openAction = ()=> {
		setOpen(!open)

	}

	return (
	     <div className={classes.root}>
			 <Hidden xsDown>
			  <SideBar variant="permanent" open={true}/>
			 </Hidden>
			 <Hidden smUp>
			  <SideBar variant="temporary" open={open} onClose={openAction}/>
			 </Hidden>
					<UIView />
					<div className={classes.content}>
					<div className={classes.toolbar}>
				</div>
			</div>
		 </div>


	)
  }


export default Layout;
