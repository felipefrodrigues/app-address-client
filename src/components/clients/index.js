import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import Fab from "@material-ui/core/Fab"
import useList from "./styles"

const Clients = () => {
  const { clients } = useSelector((state) => state.clientState)
  const dispatch = useDispatch()
  const classes = useList()
  const deleteClient = (client) => {
    const { id } = client
    dispatch({ type: "ASYNC_DELETE_CLIENT", id })
  }
  if (clients.length === 0) {
    return (
      <div className={classes.vazio}>
        <span>Você não tem nenhum cliente cadastrado,</span>
        <Link to="/client">clique aqui para se cadastrar</Link>
      </div>
    )
  }
  return (
    <List>
      {clients.map((client) => (
        <ListItem key={client.id} className={classes.container}>
          <div className={classes.container__list}>
            <div className={classes.identify}>{client.id}</div>
            <div>
              <div className={classes.title}>{client.nome}</div>
              <div className={classes.subtitle}>
                {`${client.idade} | ${client.sexo}`}
              </div>
            </div>
          </div>
          <div className={classes.container__buttons}>
            <Link to={`/client/${client.id}`}>
              <Fab size="small" color="primary" aria-label="edit">
                <EditIcon />
              </Fab>
            </Link>
            <Fab size="small" color="secondary" aria-label="delete" onClick={() => deleteClient(client)}>
              <DeleteIcon />
            </Fab>
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default Clients
