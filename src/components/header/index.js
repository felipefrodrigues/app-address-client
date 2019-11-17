import React from "react"
import { useSelector, useDispatch } from "react-redux"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import clsx from "clsx"
import { Creators } from "../../state/ducks/toggleBar"
import useHeader from "./styles"

const Header = () => {
  const classes = useHeader()
  const { toggleBar } = useSelector((state) => state.toggleBarState)
  const dispatch = useDispatch()

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: toggleBar,
      })}
    >
      <Toolbar className={classes.menu}>
        <IconButton onClick={() => dispatch(Creators.setToggleBar())} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
