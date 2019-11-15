import React from "react"
import { useSelector } from "react-redux"
import clsx from "clsx"
import useListingPage from "./styles"

const Listing = () => {
  const { toggleBar } = useSelector((state) => state.toggleBarState)
  const classes = useListingPage()

  return (
    <section className={clsx(classes.appBar, {
      [classes.appBarShift]: toggleBar,
    })}
    >
      Teste
    </section>
  )
}

export default Listing
