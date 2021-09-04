import React from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';

import images from '../../utils/data/images.json';
import { ImageProps } from '../../utils/interfaces';

import useStyles from './styles';

const ImagesList: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <ImageList rowHeight={160} cols={3} className={classes.container}>
      {images.map((image: ImageProps) => (
        <ImageListItem className={classes.image} key={image.id}>
          <img src={image.image} alt={image.alt} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImagesList;
