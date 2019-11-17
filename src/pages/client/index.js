import React from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import ContainerStep from "../../components/step"
import { Creators } from "../../state/ducks/client"
import { Creators as CreatorsStep } from "../../state/ducks/step"
import Layout from "../../components/layout"

const Client = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  if (id) {
    dispatch(Creators.editClient(id))
    dispatch(CreatorsStep.setEditMode(true))
  } else {
    dispatch(Creators.resetClient(id))
    dispatch(Creators.resetAddress())
    dispatch(CreatorsStep.setEditMode(false))
  }
  return (
    <Layout>
      <ContainerStep />
    </Layout>
  )
}

export default Client
