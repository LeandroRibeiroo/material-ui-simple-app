import React from 'react';
import { Container } from '@material-ui/core';

import Post from '../Post';
import postsData from '../../utils/data/posts.json';

import useStyles from './styles';

const Feed: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {postsData.map((post) => (
        <Post
          id={post.id}
          title={post.title}
          description={post.description}
          image={post.image}
          href={post.href}
        />
      ))}
    </Container>
  );
};

export default Feed;
