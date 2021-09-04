import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

import useStyles from './styles';
import AvatarList from '../AvatarGroup';
import ImagesList from '../ImageList';
import Categories from '../Categories';

const Rightbar: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.avatars}>
        <Typography gutterBottom> Amigos online </Typography>
        <AvatarList />
      </Box>

      <Box className={classes.gallery}>
        <Typography gutterBottom>Galeria</Typography>
        <ImagesList />
      </Box>

      <Box className={classes.categories}>
        <Typography>Categorias</Typography>
        <Categories />
      </Box>
    </Container>
  );
};

export default Rightbar;
