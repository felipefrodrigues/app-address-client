import { createActions, createReducer } from "reduxsauce"

export const { Types, Creators } = createActions({
  setToggleBar: [],
})

const INITIAL_STATE = {
  toggleBar: true,
  routes: [
    { id: 0, name: "Inicio", link: "/" },
    { id: 1, name: "Cadastro", link: "/client" },
    { id: 2, name: "Listagem", link: "/listing" },
  ],
}

const setToggleBar = (state = INITIAL_STATE) => ({
  ...state,
  toggleBar: !state.toggleBar,
})

export default createReducer(INITIAL_STATE, {
  [Types.SET_TOGGLE_BAR]: setToggleBar,
})
