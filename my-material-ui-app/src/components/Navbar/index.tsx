import React, { useState } from 'react';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

const Navbar: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.logoLg}>
          Hello World!
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Hello!
        </Typography>

        <div className={classes.search}>
          <Search className={classes.searchIcon} />
          <InputBase placeholder="Procure..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>

        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />

          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail className={classes.iconsChildren} />
          </Badge>

          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications className={classes.iconsChildren} />
          </Badge>

          <Avatar
            className={classes.iconsChildren}
            alt="Profile pic"
            src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
