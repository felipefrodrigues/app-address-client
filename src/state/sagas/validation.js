import { put, select } from "redux-saga/effects"
import { Creators } from "../ducks/step"
import { Creators as CreatorClient } from "../ducks/client"

function verificationField(fields) {
  let verification = 0
  const newFields = fields.map((field) => {
    if (field.required && (field.value === undefined || field.value === "")) {
      field.error = true
      verification += 1
    }
    return field
  })
  return { newFields, verification }
}

function* fieldRequired(action) {
  const { client, address } = yield select((state) => state.clientState)

  if (action.step === 0) {
    const objectVerification = yield verificationField(client)
    if (objectVerification.verification > 0) {
      yield put(CreatorClient.putClient(objectVerification.newFields))
    } else {
      yield put(Creators.nextStep())
    }
  } else if (action.step === 1) {
    const objectVerification = yield verificationField(address)
    if (objectVerification.verification > 0) {
      yield put(CreatorClient.putAddress(objectVerification.newFields))
    } else {
      yield put(Creators.nextStep())
    }
  } else {
    yield put(Creators.nextStep())
  }
}

export default { fieldRequired }