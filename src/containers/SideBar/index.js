import React from 'react';
//materialui
import {Drawer,Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles';
import List from './List'
import img from '../../assets/img/io.png'

//styles
const styles = makeStyles(theme => ({
    drawer:{
        width: 225,
        flexShrink: 1
    },
    drawerPaper:{
        width: 220
    },
    toolbar: 56,
    logo:{
        width: 102.4,
        height: 76.8,
        marginLeft: 80
    }
}))

const SideBar = (props) => {

    //styles
    const classes = styles()

    return (
      <Drawer
       className={classes.drawer}
       classes={{ paper: classes.drawerPaper}}
       anchor="left"
       variant={props.variant}
       open={props.open}
       onClose={props.onClose ? props.onClose : null}
       >
         <div className={classes.toolbar}>
         <img src={img} className={classes.logo} />
         </div>
         <List/>
      </Drawer>
    )
}

export default SideBar
