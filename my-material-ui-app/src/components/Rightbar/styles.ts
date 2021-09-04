import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: theme.spacing(10),
  },
  avatars: {},
  gallery: {
    paddingTop: theme.spacing(2),
  },
  categories: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
  },
}));

export default useStyles;
