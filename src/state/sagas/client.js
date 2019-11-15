import { put, call } from "redux-saga/effects"
import { Creators } from "../ducks/client"
import Services from "../../services"
import constants from "../../constants"

function* getClients() {
  const result = yield call(Services.get, `${constants.ASYNC_GET_CLIENTS}`)
  if (result.sucesso) {
    yield put(Creators.setClients(result.clients))
  }
}

function* deleteClient(action) {
  const result = yield call(Services.delete, `${constants.ASYNC_DELETE_CLIENT}/user/${action.id}`)
  if (result.sucesso) {
    yield put(Creators.deleteClient(action.id))
  }
}

export default { getClients, deleteClient }
