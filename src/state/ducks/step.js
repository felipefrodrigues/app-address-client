import { createActions, createReducer } from "reduxsauce"

export const { Types, Creators } = createActions({
  step: [],
  nextStep: [],
  backStep: [],
  resetStep: [],
  setEditMode: ["value"],
})

const INITIAL_STATE = {
  stepsTitle: ["Cadastre-se", "Cadastre o endereço"],
  activeStep: 0,
  editMode: false,
}

const step = (state = INITIAL_STATE) => ({
  ...state,
})

const nextStep = (state = INITIAL_STATE) => ({
  ...state,
  activeStep: state.activeStep + 1,
})

const backStep = (state = INITIAL_STATE) => ({
  ...state,
  activeStep: state.activeStep - 1,
})

const resetStep = (state = INITIAL_STATE) => ({
  ...state,
  activeStep: 0,
})

const setEditMode = (state = INITIAL_STATE, action) => {
  let { editMode, stepsTitle } = state
  editMode = action.value
  if (editMode) {
    stepsTitle = ["Editar dados pessoais", "Editar o endereço"]
  } else {
    stepsTitle = ["Cadastre-se", "Cadastre o endereço"]
  }

  return {
    ...state,
    editMode,
    stepsTitle,
    activeStep: 0,
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.STEP]: step,
  [Types.NEXT_STEP]: nextStep,
  [Types.BACK_STEP]: backStep,
  [Types.RESET_STEP]: resetStep,
  [Types.SET_EDIT_MODE]: setEditMode,
})
