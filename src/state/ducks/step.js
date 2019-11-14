import { createActions, createReducer } from "reduxsauce"

export const { Types, Creators } = createActions({
  step: [],
  nextStep: [],
  backStep: [],
  resetStep: [],
})

const INITIAL_STATE = {
  stepsTitle: ["Cadastre-se", "Cadastre o endereço", "Obrigado por se cadastrar !"],
  activeStep: 0,
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

export default createReducer(INITIAL_STATE, {
  [Types.STEP]: step,
  [Types.NEXT_STEP]: nextStep,
  [Types.BACK_STEP]: backStep,
  [Types.RESET_STEP]: resetStep,
})
