import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby-theme-material-ui';
import ProTip from '../components/ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          NNUUNNUU NNUUNNUU NNUUNNUU NNUUNNUU NNUUNNUU NNUUNNUU
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about pagesss
        </Link>
        <Link to="/no-data">Programatic no-data</Link>
        <Link to="/light-bulb">Light bulb</Link>
        <Link to="/no-data">Programatic no-data</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
