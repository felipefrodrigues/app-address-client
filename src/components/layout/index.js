import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import clsx from "clsx"
import useLayout from "./styles"
import useIsMobile from "../../hooks/useIsMobile"

const Layout = ({ children }) => {
  const [child, setChildren] = useState(children)
  const { toggleBar } = useSelector((state) => state.toggleBarState)
  const classes = useLayout()
  const mobile = useIsMobile()
  useEffect(() => {
    setChildren(children)
  }, [children])

  return (
    <section
      className={mobile
        ? clsx(classes.container, classes.appBar)
        : clsx(classes.container, classes.appBar, {
          [classes.appBarShift]: toggleBar,
        })}
    >
      {child}
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
