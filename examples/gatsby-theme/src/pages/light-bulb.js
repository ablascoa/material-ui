import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby-theme-material-ui';
import ProTip, { LightBulbIcon } from '../components/ProTip';

const Copyright = () => {
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
};

const NUM_LIGHTBULBS = 2000;
const LightBulbPage = () => {
  let lightBulbs = [];
  for (let i = 0; i < NUM_LIGHTBULBS; i++) {
    lightBulbs.push(<LightBulbIcon />);
  }
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          NNUUNNUU NNUUNNUU NNUUNNUU NNUUNNUU NNUUNNUU NNUUNNUU
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
      {lightBulbs}
    </Container>
  );
};

export default LightBulbPage;
