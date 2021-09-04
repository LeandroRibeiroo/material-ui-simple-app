import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    overflow: 'hidden',
    borderRadius: 12,
  },
  image: {
    cursor: 'pointer',
    transition: 'all 0.3s ease-out',
    '&:hover': {
      opacity: 0.8,
      transform: 'scale(1.05)',
    },
  },
}));

export default useStyles;
