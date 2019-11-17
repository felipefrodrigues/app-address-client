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
import CloseIcon from "@material-ui/icons/Close"
import { Link } from "react-router-dom"
import { Creators } from "../../state/ducks/toggleBar"
import useToggleBar from "./styles"
import useIsMobile from "../../hooks/useIsMobile"

const ToggleBar = () => {
  const { toggleBar, routes } = useSelector((state) => state.toggleBarState)
  const dispatch = useDispatch()
  const classes = useToggleBar()
  const mobile = useIsMobile()

  return (
    <aside>
      <Drawer
        className={classes.drawer}
        variant={mobile ? "temporary" : "persistent"}
        anchor="left"
        open={toggleBar}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => dispatch(Creators.setToggleBar())}>
            <CloseIcon className={classes.icon} />
          </IconButton>
          <span>Olá, usuário(a)</span>
        </div>
        <Divider />
        <List>
          {routes.map((route, index) => (
            <Link to={route.link} key={route.id}>
              <ListItem button className={classes.link}>
                <ListItemIcon className={classes.icon}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
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
