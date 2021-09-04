import { alpha, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    transition: "all 0.3s ease-out",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      transition: "all 0.3s ease-out",
    },
    [theme.breakpoints.down("xs")]: {
      display: (props: any) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  searchIcon: {
    marginLeft: theme.spacing(1),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
    transition: "all 0.3s ease-out",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: "rgba(0,0,0,0.24)",
    },
  },
  input: {
    color: "#FFF",
    marginLeft: theme.spacing(1),
    width: "100%",
  },
  cancel: {
    display: "flex",
    marginLeft: "auto",
    marginRight: theme.spacing(1),
    cursor: "pointer",
    transition: "all 0.3s ease-out",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: "rgba(0,0,0,0.24)",
    },
  },
  icons: {
    alignItems: "center",
    display: (props: any) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  iconsChildren: {
    cursor: "pointer",
    transition: "all 0.3s ease-out",
    "&:hover": {
      color: "rgba(0,0,0,0.24)",
    },
  },
}));

export default useStyles;
