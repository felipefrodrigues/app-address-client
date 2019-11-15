import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Creators } from "../../state/ducks/client"

const Clients = () => {
  const { clients } = useSelector((state) => state.clientState)
  const dispatch = useDispatch()
  const deleteClient = (client) => {
    const { id } = client
    dispatch({ type: "ASYNC_DELETE_CLIENT", id })
  }
  const putClient = (client) => {
    console.log(client)
  }
  return (
    <div>
      {clients.map((client) => (
        <div>
          {client.nome}
          <button type="button" onClick={() => deleteClient(client)}>remover</button>
          <button type="button" onClick={() => putClient(client)}>editar</button>
        </div>
      ))}
    </div>
  )
}

export default Clients
