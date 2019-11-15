import React from "react"
import ContainerStep from "../../components/step"
import useClientPage from "./styles"
import clsx from "clsx"
import { useSelector, useDispatch } from "react-redux"

const Client = () => { 
  const { toggleBar } = useSelector((state) => state.toggleBarState)
  const classes = useClientPage()

  return(
    <section className={clsx(classes.appBar, {
      [classes.appBarShift]: toggleBar,
    })}>
      <ContainerStep />
    </section>
  )
}

export default Client
