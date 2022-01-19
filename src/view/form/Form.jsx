import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const useStyles = makeStyles({
  title: {
    fontFamily: "Roboto Condensed",
    fontSize: "30px",
    marginBottom: "20px",
    color: "white",
  },
  title2: {
    fontFamily: "Roboto Condensed",
    fontSize: "30px",
    marginBottom: "10px",
  },
  input: {
    width: "500px",
    marginBottom: "20px",
  },
  button: {
    color: "red",
    marginTop: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    backgroundColor: "#ccb182",
    width: "500px",
    borderRadius: "10px",
    marginLeft: "33%",
    marginTop: "50px",
  },
  list: {
    fontFamily: "Dancing Script",
    fontSize: "40px",
  },
  membre: {
    marginTop: "100px",
  },
});

function Form(props) {
  const classes = useStyles();

  const [members, setMembers] = React.useState([]);

  const [addMembers, setAddMembers] = React.useState({
    name: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3030/api/members")
      .then((response) => response.data)
      .then((data) => {
        setMembers(data);
      });
  });

  const createMembers = () => {
    axios.post("http://localhost:3030/api/members", addMembers);
  };

  const handleTextFieldChange = (e) => {
    setAddMembers({ ...members, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(members);
    createMembers();
  };
  return (
    <div>
      <div className={classes.form}>
        <Typography className={classes.title}>
          Ajouter un(e) Argonaute :{" "}
        </Typography>
        <div>
          <TextField
            id="name"
            label="Entrer un nom"
            variant="outlined"
            className={classes.input}
            name={"name"}
            onChange={handleTextFieldChange}
            value={members.name}
            color="secondary"
          />
        </div>
        <div className={classes.button}>
          {" "}
          <Button variant="outlined" color="secondary" onClick={handleSubmit}>
            AJOUTER
          </Button>
        </div>
      </div>
      <div className={classes.membre}>
        <Typography className={classes.title2}>
          Membres de l'équipage
        </Typography>
        {members.map((member, index) => (
          <Typography className={classes.list}>{member.name}</Typography>
        ))}
      </div>
    </div>
  );
}

export default Form;
