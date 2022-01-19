import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
footer : {
    backgroundColor : "#f76c6c", 
    height : "50px", 
    display : "flex", 
    alignItems : "center", 
    justifyContent : "center", 
    bottom: "0px",
    padding: "0.25em 0",
    marginTop: "2em",
}, 

text :  {
    color : "white"
}
}); 
function Footer(props) {
    const classes = useStyles(); 
    return (
        <div className={classes.footer}>
            <Typography className={classes.text}>Réalisé par Jason en Anthsetérion de l'an 515 avant JC</Typography>
            
        </div>
    );
}

export default Footer;