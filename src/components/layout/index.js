import React from "react"
import { useSelector } from "react-redux"
import clsx from "clsx"
import useLayout from "./styles"

const Layout = ({ children }) => {
  const { toggleBar } = useSelector((state) => state.toggleBarState)
  const classes = useLayout()

  return (
    <section className={clsx(classes.container, classes.appBar, {
      [classes.appBarShift]: toggleBar,
    })}
    >
      {children}
    </section>
  )
}

export default Layout