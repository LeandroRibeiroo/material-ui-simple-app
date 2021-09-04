import React from 'react';
import { Box, Link } from '@material-ui/core';

import HdIcon from '@material-ui/icons/Hd';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

import useStyles from './styles';

const Categories: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Link className={classes.link} variant="body1">
        <SportsBasketballIcon style={{ marginRight: 10 }} />
        Esportes
      </Link>
      <Link className={classes.link} variant="body1">
        <FastfoodIcon style={{ marginRight: 10 }} />
        Comidas
      </Link>
      <Link className={classes.link} variant="body1">
        <HdIcon style={{ marginRight: 10 }} />
        Filmes
      </Link>
      <Link className={classes.link} variant="body1">
        <LiveHelpIcon style={{ marginRight: 10 }} />
        Ciência
      </Link>
    </Box>
  );
};

export default Categories;
