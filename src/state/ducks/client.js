import { createActions, createReducer } from "reduxsauce"

export const { Types, Creators } = createActions({
  setClientField: ["arrayIndice", "field", "value"],
  setAddressField: ["arrayIndice", "field", "value"],
  setAddress: ["value"],
  setClients: ["clients"],
  putClient: ["value"],
  putAddress: ["value"],
  putState: ["field", "value"],
  postForm: [],
  resetAddress: [],
  deleteClient: ["id"],
  editClient: ["id"],
  putForm: ["id"],
  resetClient: [],
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
      key: 6,
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
      key: 7,
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
      key: 8,
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
      key: 9,
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
      key: 10,
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
      key: 11,
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
      key: 12,
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
const resetClient = (state = INITIAL_STATE) => {
  const { client } = state

  const newClient = client.map((field) => {
    field.value = ""
    field.error = false
    field.key = Math.random()
    return field
  })

  return {
    ...state,
    client: newClient,
  }
}
const postForm = (state = INITIAL_STATE) => {
  const { address, client, clients } = state
  const newClient = {}
  const newAddress = {}
  client.map((field) => {
    newClient[field.name] = field.value
    newClient.id = clients.length + 1
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

const setClients = (state = INITIAL_STATE, action) => ({
  ...state,
  clients: action.clients,
})

const deleteClient = (state = INITIAL_STATE, action) => {
  const { clients } = state
  const newClients = clients.filter((client) => client.id !== action.id)
  return {
    ...state,
    clients: newClients,
  }
}

const editClient = (state = INITIAL_STATE, action) => {
  const { clients, client, address } = state
  const clientEdit = clients.filter((cli) => parseInt(action.id, 10) === parseInt(cli.id, 10))
  if (clientEdit.length > 0) {
    Object.keys(clientEdit[0]).map((prop) => {
      if (prop === "address") {
        address.map((field) => {
          Object.keys(clientEdit[0][prop][0]).map((propAddress) => {
            if (field.name === propAddress) {
              field.value = clientEdit[0][prop][0][propAddress]
              if (field.name === "cep") {
                field.disabled = true
              }
              if (field.name === "numero" || field.name === "complemento") {
                field.disabled = false
              }
            }
            return propAddress
          })
          return field
        })
      } else {
        client.map((field) => {
          if (field.name === prop) {
            field.value = clientEdit[0][prop]
          }
          return field
        })
      }
      return prop
    })
  }

  return {
    ...state,
    client,
    address,
    foundAdress: true,
  }
}

const putForm = (state = INITIAL_STATE, action) => {
  const { address, client, clients } = state
  const newClient = clients.filter((cli) => cli.id !== action.id)
  const newAddress = newClient[0].address[0]
  client.map((field) => {
    newClient[0][field.name] = field.value
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

  return {
    ...state,
    clients: [...clients],
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_CLIENT_FIELD]: setClientField,
  [Types.SET_ADDRESS_FIELD]: setAddressField,
  [Types.SET_ADDRESS]: setAddress,
  [Types.SET_CLIENTS]: setClients,
  [Types.PUT_CLIENT]: putClient,
  [Types.PUT_ADDRESS]: putAddress,
  [Types.PUT_STATE]: putState,
  [Types.RESET_ADDRESS]: resetAddress,
  [Types.POST_FORM]: postForm,
  [Types.DELETE_CLIENT]: deleteClient,
  [Types.EDIT_CLIENT]: editClient,
  [Types.PUT_FORM]: putForm,
  [Types.RESET_CLIENT]: resetClient,
})
