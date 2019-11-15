import { createActions, createReducer } from "reduxsauce"

export const { Types, Creators } = createActions({
  setClientField: ["arrayIndice", "field", "value"],
  setAddressField: ["arrayIndice", "field", "value"],
  setAddress: ["value"],
  putClient: ["value"],
  putAddress: ["value"],
  putState: ["field", "value"],
  postForm: [],
  resetAddress: [],
})

const INITIAL_STATE = {
  addressHasLoad: false,
  foundAdress: false,
  client: [
    {
      name: "nome",
      error: false,
      value: undefined,
      id: "nome",
      type: "text",
      label: "Nome",
      maxLength: 100,
      required: true,
      key: 0,
      options: [],
    },
    {
      name: "email",
      error: false,
      value: undefined,
      id: "email",
      type: "text",
      label: "Email",
      maxLength: 100,
      required: true,
      key: 1,
      options: [],
    },
    {
      name: "idade",
      error: false,
      value: undefined,
      id: "idade",
      type: "number",
      label: "Idade",
      maxLength: 100,
      required: false,
      key: 2,
      options: [],
    },
    {
      name: "telefone",
      error: false,
      value: undefined,
      id: "telefone",
      type: "number",
      label: "Telefone",
      maxLength: 100,
      required: false,
      key: 3,
      options: [],
    },
    {
      name: "cpf",
      error: false,
      value: undefined,
      id: "cpf",
      type: "text",
      label: "CPF",
      maxLength: 100,
      required: true,
      key: 4,
      options: [],
    },
    {
      name: "sexo",
      error: false,
      value: undefined,
      id: "sexo",
      type: "radio",
      label: "Sexo",
      maxLength: 0,
      required: true,
      key: 5,
      options: [{ label: "Feminino", value: "feminino", id: 0 }, { label: "Masculino", value: "masculino", id: 1 }, { label: "Outro", value: "outro", id: 2 }],
    },
  ],
  address: [
    {
      name: "cep",
      error: false,
      value: undefined,
      id: "cep",
      type: "text",
      label: "Digite seu CEP",
      maxLength: 8,
      required: true,
      key: 0,
      options: [],
      disabled: false,
    },
    {
      name: "logradouro",
      error: false,
      value: undefined,
      id: "rua",
      type: "text",
      label: "Rua",
      maxLength: 100,
      required: true,
      key: 1,
      options: [],
      disabled: true,
    },
    {
      name: "bairro",
      error: false,
      value: undefined,
      id: "bairro",
      type: "text",
      label: "Bairro",
      maxLength: 100,
      required: true,
      key: 2,
      options: [],
      disabled: true,
    },
    {
      name: "numero",
      error: false,
      value: undefined,
      id: "numero",
      type: "text",
      label: "Numero",
      maxLength: 100,
      required: false,
      key: 3,
      options: [],
      disabled: true,
    },
    {
      name: "complemento",
      error: false,
      value: undefined,
      id: "complemento",
      type: "text",
      label: "Complemento",
      maxLength: 100,
      required: false,
      key: 4,
      options: [],
      disabled: true,
    },
    {
      name: "localidade",
      error: false,
      value: undefined,
      id: "localidade",
      type: "text",
      label: "Cidade",
      maxLength: 100,
      required: true,
      key: 5,
      options: [],
      disabled: true,
    },
    {
      name: "uf",
      error: false,
      value: undefined,
      id: "uf",
      type: "text",
      label: "Estado",
      maxLength: 100,
      required: true,
      key: 6,
      options: [],
      disabled: true,
    },
  ],
  clients: [],
}

const setClientField = (state = INITIAL_STATE, action) => {
  const { client } = state

  client[action.arrayIndice].error = false
  client[action.arrayIndice][action.field] = action.value


  return {
    ...state,
    client,
  }
}

const setAddressField = (state = INITIAL_STATE, action) => {
  const { address } = state

  address[action.arrayIndice].error = false
  address[action.arrayIndice][action.field] = action.value

  return {
    ...state,
    address,
  }
}

const setAddress = (state = INITIAL_STATE, action) => {
  const { address } = state
  const newAddress = address.map((field) => {
    if (action.value[field.name]) {
      field.value = action.value[field.name]
      field.disabled = true
    } else {
      field.disabled = false
    }
    return field
  })

  return {
    ...state,
    address: newAddress,
    foundAdress: true,
  }
}

const putClient = (state = INITIAL_STATE, action) => {
  let { client } = state

  client = action.value

  return {
    ...state,
    client,
  }
}

const putAddress = (state = INITIAL_STATE, action) => {
  let { address } = state

  address = action.value

  return {
    ...state,
    address,
  }
}

const putState = (state = INITIAL_STATE, action) => {
  state[action.field] = action.value

  return {
    ...state,
  }
}

const resetAddress = (state = INITIAL_STATE) => {
  const { address } = state

  const newAddress = address.map((field) => {
    if (field.name === "cep") {
      field.disabled = false
    }
    field.value = ""
    field.error = false
    return field
  })

  return {
    ...state,
    address: newAddress,
    addressHasLoad: false,
    foundAdress: false,
  }
}

const postForm = (state = INITIAL_STATE) => {
  const { address, client, clients } = state
  const newClient = {}
  const newAddress = {}
  client.map((field) => {
    newClient[field.name] = field.value
    field.value = ""
    field.error = false
    return field
  })

  address.map((field) => {
    newAddress[field.name] = field.value
    field.value = ""
    field.error = false
    return field
  })

  newClient.address = [newAddress]

  return {
    ...state,
    clients: [...clients, newClient],
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_CLIENT_FIELD]: setClientField,
  [Types.SET_ADDRESS_FIELD]: setAddressField,
  [Types.SET_ADDRESS]: setAddress,
  [Types.PUT_CLIENT]: putClient,
  [Types.PUT_ADDRESS]: putAddress,
  [Types.PUT_STATE]: putState,
  [Types.RESET_ADDRESS]: resetAddress,
  [Types.POST_FORM]: postForm,
})
