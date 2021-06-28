import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Mental Chroma
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
 
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      boxShadow:"1px 1px 5px grey"
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
      </Container>
      <footer className={classes.footer}>
      
                
          <Copyright />
      </footer>
    </Box>
  )
}