import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import clsx from "clsx"
import useLayout from "./styles"

const Layout = (props) => {
  const [children, setChildren] = useState(props.children)
  const { toggleBar } = useSelector((state) => state.toggleBarState)
  const classes = useLayout()

  useEffect(() => {
    setChildren(props.children)
  })

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