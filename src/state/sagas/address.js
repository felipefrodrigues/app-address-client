import { put, select, call } from "redux-saga/effects"
import { Creators } from "../ducks/client"
import Services from "../../services"
import constants from "../../constants"

function* getAddress(action) {
  const result = yield call(Services.get, `${constants.ADDRESS_GET_CEP}/${action.cep}/json`)
  if (result.erro) {
    yield put(Creators.setAddressField(0, "error", true))
  } else {
    yield put(Creators.setAddress(result))
  }
}

export default { getAddress }
