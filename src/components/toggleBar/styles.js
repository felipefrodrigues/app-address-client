import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 240
const useToggleBar = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(35, 47, 62)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    backgroundColor: "rgb(27, 36, 47)",
    color: "white",
  },
  link: {
    color: "white",
  },
  icon: {
    color: "white",
  },
}))

export default useToggleBar
