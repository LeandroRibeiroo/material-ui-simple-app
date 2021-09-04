import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)  => ({
  right: {
    [theme.breakpoints.down("xs")]: {
      display: "none",  
    }
  },
}));

export default useStyles;