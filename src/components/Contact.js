import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles(() => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  mailPhone : {
    display : "block",
    margin : "20px auto",
    textDecoration: "none",
    color: "tomato",
    textAlign : "center",
    fontSize : "20px",
    letterSpacing : ".1rem"
  }
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  }

})(TextField);

const Contact = () => {
  const classes = useStyles();
  init("user_qgNbbhNEOZCqVam1h08VN")
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_ims5hej', e.target, 'service_tbyc8ao')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  }

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Hire or Contact me...
            </Typography>
            <InputField
                fullWidth={true}
                label="Name"
                variant="outlined"
                inputProps={{ className: classes.input }}
            />
            <InputField
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{ className: classes.input }}
                className={classes.field}
            />
            <InputField
                fullWidth={true}
                label="Message"
                variant="outlined"
                type ='submit'
                multiline
                rows={4}
                inputProps={{ className: classes.input }}
            />
            <Button
                variant="outlined"
                fullWidth={true}
                endIcon={<Send />}
                className={classes.button}
                onClick={sendEmail}

            >
              Contact Me
            </Button>
            <a href="mailto:swebproger@gmail.com" className={classes.mailPhone}>
              swebproger@gmail.com
            </a>
            <a href="tel: +380508054899" className={classes.mailPhone}>
              +380508054899
            </a>
          </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
