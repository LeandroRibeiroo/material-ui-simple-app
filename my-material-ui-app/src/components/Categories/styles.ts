import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    paddingTop: theme.spacing(1),
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-out',
    '&:hover': {
      opacity: 0.7,
    },
  },
}));

export default useStyles;
