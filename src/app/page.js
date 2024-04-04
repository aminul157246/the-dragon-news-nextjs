import Mainbar from '@/components/ui/Mainbar';
import Sidebar from '@/components/ui/Sidebar';
import { Grid } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <div>
         <Grid container spacing={2}>
  <Grid item xs={8}>
    <Mainbar/>
  </Grid>
  <Grid item xs={4}>
    <Sidebar/>
  </Grid>
</Grid>
    </div>
  );
};

export default Home;