import React from "react"
import { useSelector, useDispatch } from "react-redux"
import TextField from "@material-ui/core/TextField"
import { Creators } from "../../state/ducks/client"
import useAddress from "./styles"

const Address = () => {
  const classes = useAddress()
  const dispatch = useDispatch()

  const { address, addressHasLoad, foundAdress } = useSelector((state) => state.clientState)


  const onAddressCEP = (event, arrayIndice) => {
    const { value } = event.target
    if (value.length >= 8) {
      dispatch({ type: "GET_ADDRESS", cep: value })
    }
    dispatch(Creators.setAddressField(arrayIndice, "value", value))
  }

  const onAddressInputChange = (event, arrayIndice) => {
    const { value } = event.target
    dispatch(Creators.setAddressField(arrayIndice, "value", value))
  }

  return (
    <form className={classes.container} autoComplete="off">
      <div>
        {
          address.map((field, index) => {
            if (field.name === "cep") {
              return (
                <div className={classes.cep}>
                  <TextField
                    key={field.key}
                    required={field.required}
                    id={field.id}
                    label={field.label}
                    name={field.name}
                    defaultValue={field.value}
                    value={field.value}
                    className={classes.textField}
                    margin="normal"
                    onChange={(e) => onAddressCEP(e, index)}
                    error={field.error}
                    inputProps={{ maxLength: field.maxLength, autoComplete: "off" }}
                    disabled={field.disabled}
                  />
                  { field.disabled ? <button type="button" onClick={() => dispatch(Creators.resetAddress())}>Alterar</button> : <div />}
                </div>
              )
            }
            if (foundAdress) {
              return (
                <TextField
                  key={field.key}
                  required={field.required}
                  id={field.id}
                  label={field.label}
                  name={field.name}
                  defaultValue={field.value}
                  className={classes.textField}
                  margin="normal"
                  onChange={(e) => onAddressInputChange(e, index)}
                  error={field.error}
                  inputProps={{ maxLength: field.maxLength, autoComplete: "off" }}
                  disabled={field.disabled}
                />
              )
            }
          })
        }
      </div>
    </form>
  )
}

export default Address
