import React from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './styles';
import {
  Bookmark,
  ExitToApp,
  Home,
  List,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from '@material-ui/icons';

const LeftBar: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}> Página Inicial </Typography>
      </div>

      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}> Amigos </Typography>
      </div>

      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}> Listas </Typography>
      </div>

      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}> Camera </Typography>
      </div>

      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}> Videos </Typography>
      </div>

      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}> Apps </Typography>
      </div>

      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}> Coleções </Typography>
      </div>

      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}> MarketPlace </Typography>
      </div>

      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}> Configurações </Typography>
      </div>

      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}> Logout </Typography>
      </div>
    </Container>
  );
};

export default LeftBar;
