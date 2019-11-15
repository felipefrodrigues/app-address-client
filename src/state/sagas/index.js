import { takeLatest } from "redux-saga/effects"
import Validation from "./validation"
import Address from "./address"
import Client from "./client"

function* rootSagas() {
  yield takeLatest("ASYNC_VALIDATE_FIELDS", Validation.fieldRequired)
  yield takeLatest("ASYNC_GET_ADDRESS", Address.getAddress)
  yield takeLatest("ASYNC_GET_CLIENTS", Client.getClients)
  yield takeLatest("ASYNC_DELETE_CLIENT", Client.deleteClient)
}

export default rootSagas
