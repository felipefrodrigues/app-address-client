import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { useTheme } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { Creators } from "../../state/ducks/toggleBar"
import useToggleBar from "./styles"

const ToggleBar = () => {
  const { toggleBar, routes } = useSelector((state) => state.toggleBarState)
  const dispatch = useDispatch()
  const classes = useToggleBar()
  const theme = useTheme()

  return (
    <aside>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={toggleBar}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => dispatch(Creators.setToggleBar())}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((route, index) => (
            <Link to={route.link} key={route.id}>
              <ListItem button>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
    </aside>
  )
}

export default ToggleBar
