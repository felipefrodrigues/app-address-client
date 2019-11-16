import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

const Clients = () => {
  const { clients } = useSelector((state) => state.clientState)
  const dispatch = useDispatch()
  const deleteClient = (client) => {
    const { id } = client
    dispatch({ type: "ASYNC_DELETE_CLIENT", id })
  }
  return (
    <div>
      {clients.map((client) => (
        <div>
          {client.nome}
          <button type="button" onClick={() => deleteClient(client)}>remover</button>
          <Link to={`/client/${client.id}`}>editar</Link>
        </div>
      ))}
    </div>
  )
}

export default Clients
