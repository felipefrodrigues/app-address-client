import { takeLatest } from "redux-saga/effects"
import Validation from "./validation"
import Address from "./address"

function* rootSagas() {
  yield takeLatest("VALIDATE_FIELDS", Validation.fieldRequired)
  yield takeLatest("GET_ADDRESS", Address.getAddress)
}

export default rootSagas
