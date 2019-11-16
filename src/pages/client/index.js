import React from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import ContainerStep from "../../components/step"
import { Creators } from "../../state/ducks/client"

import Layout from "../../components/layout"

const Client = () => {
  let { id } = useParams()
  const dispatch = useDispatch()
  if (id) {
    dispatch(Creators.editClient(id))
  }
  return (
    <Layout>
      <ContainerStep />
    </Layout>
  )
}

export default Client
