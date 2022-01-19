import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles ({
logo : {
    maxWidth : "150px",
    marginTop : "20px"
}, 
title : { 
    fontSize : "60px", 
    fontFamily : 'Acme', 
    marginTop : "20px", 
    color : "grey"
}, 

}); 

function Header(props) {
    const classes = useStyles();
  return (
    <div className={classes.header}>
      <img
        src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
        alt="Wild Code School logo"
        className={classes.logo}
   
      />
      <Typography className={classes.title}>LES ARGONAUTES</Typography>
    </div>
  );
}

export default Header;
