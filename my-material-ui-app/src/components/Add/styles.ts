import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto',
  },
  modalContainer: {
    width: '50%',
    height: '65%',
    backgroundColor: '#FFF',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      height: '65%',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: theme.spacing(2),
  },
  item: {
    paddingTop: theme.spacing(4),
    width: '100%',
  },
  input: {
    width: '75%',
  },
  button: {
    width: 150,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
