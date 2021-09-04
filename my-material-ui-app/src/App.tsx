import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import LeftBar from './components/Leftbar';
import Rightbar from './components/Rightbar';

import useStyles from './styles/index';

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>

        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>

        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>

      <Add />
    </div>
  );
};

export default App;
