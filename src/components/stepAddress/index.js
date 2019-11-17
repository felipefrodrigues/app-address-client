import React from "react"
import { useSelector, useDispatch } from "react-redux"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Creators } from "../../state/ducks/client"
import useAddress from "./styles"

const Address = () => {
  const classes = useAddress()
  const dispatch = useDispatch()

  const { address, foundAdress } = useSelector((state) => state.clientState)


  const onAddressCEP = (event, arrayIndice) => {
    const { value } = event.target
    if (value.length >= 8) {
      dispatch({ type: "ASYNC_GET_ADDRESS", cep: value })
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
                  { field.disabled
                    ? (
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(Creators.resetAddress())}
                        className={classes.button}
                      >
                        Alterar
                      </Button>
                    )
                    : <div />}
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
            return (<div />)
          })
        }
      </div>
    </form>
  )
}

export default Address
