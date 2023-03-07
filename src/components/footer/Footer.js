import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GetAppIcon from '@mui/icons-material/GetApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid sx={{mt:'50px', }} container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h5">Get the IMDb App</Typography>
      </Grid>
      <Grid item>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <a href='https://apps.apple.com/us/app/id342792525?_branch_match_id=1017852426699367304&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL86pTNJLLCjQy8nMy9YP9k6pDDRzNDGxBABVqlN1IAAAAA%3D%3D&utm_campaign=mdot%20sitewide%20footer%20Branch%20update&utm_medium=marketing&utm_source=IMDb%20Mdot' target="_blank">
              <GetAppIcon sx={{color:"white"}} fontSize="large"/>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h5">Follow IMDb on</Typography>
      </Grid>
      <Grid item>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <a href='https://www.facebook.com/imdb' target='_blank' >
              <FacebookIcon sx={{color:"#3b5998"}} />
            </a>
          </Grid>
          <Grid item>
            <a href='https://twitter.com/imdb' target='_blank' >
              <TwitterIcon sx={{color:"#00acee"}} />
            </a>
          </Grid>
          <Grid item>
            <a href='https://www.instagram.com/imdb/' target='_blank'>
              <InstagramIcon sx={{color:"#E4405F"}} />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h5">&copy; 1990-2023 IMDb.com, Inc.</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
