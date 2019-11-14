import { createActions, createReducer } from "reduxsauce"

export const { Types, Creators } = createActions({
  setToggleBar: [],
})

const INITIAL_STATE = {
  toggleBar: true,
  routes: [
    { id: 0, name: "Home", link: "/" },
    { id: 1, name: "Client", link: "/client" },
  ],
}

const setToggleBar = (state = INITIAL_STATE) => ({
  ...state,
  toggleBar: !state.toggleBar,
})

export default createReducer(INITIAL_STATE, {
  [Types.SET_TOGGLE_BAR]: setToggleBar,
})
