import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    alignItems: 'center',
    color: '#FFF',
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#FFF',
      color: '#555',
      border: '1px solid #ece7e7',
    },
  },
  item: {
    display: 'flex',
    width: '100%',
    height: '50px',
    alignItems: 'center',
    transition: 'all 0.5s ease-out',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(1),
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#ece7e7',
        borderRadius: '5px',
      },
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('xs')]: {
      fontSize: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
    },
  },
  text: {
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
