import React, { useState } from 'react';
import Header from '../Header/Header';
//uiRouter
import { UIView } from '@uirouter/react';
//materialui
import SideBar from '../SideBar/index';
import { makeStyles } from '@material-ui/styles';
import {Hidden} from '@material-ui/core'
import blue from '@material-ui/core/colors/blue';


//styles
const styles = makeStyles(theme => ({
	root:{
		display: 'flex'
	},
	toolbar:{
		minHeight:65
	},
    content:{
        flexGrow: 1,
		backGroundColor: blue,
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
			 <Header openAction={openAction}/>
			 <Hidden xsDown>
			  <SideBar variant="permanent" open={true}/>
			 </Hidden>
			 <Hidden smUp>
			  <SideBar variant="temporary" open={open} onClose={openAction}/>
			 </Hidden>

			<div className={classes.content}>
				<div className={classes.toolbar}>
					<UIView />
				</div>
			</div>

		 </div>
	
			
	)
  }


export default Layout;