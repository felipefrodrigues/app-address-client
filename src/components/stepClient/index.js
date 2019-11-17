import React from "react"
import TextField from "@material-ui/core/TextField"
import { useSelector, useDispatch } from "react-redux"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import { Creators } from "../../state/ducks/client"
import useClientForm from "./styles"

const Client = () => {
  const classes = useClientForm()
  const dispatch = useDispatch()

  const clientFields = useSelector((state) => state.clientState.client)

  const onClientInputChange = (event, arrayIndice) => {
    const { value } = event.target
    dispatch(Creators.setClientField(arrayIndice, "value", value))
  }

  return (
    <form className={classes.container}>
      {
        clientFields.map((field, index) => {
          if (field.type === "radio") {
            return (
              <FormControl key={field.key} error={field.error} className={classes.radioGroup} required={field.required} component="fieldset">
                <FormLabel component="legend">{field.label}</FormLabel>
                <RadioGroup defaultValue={field.value} aria-label="gender" name={field.name} onChange={(e) => onClientInputChange(e, index)} row>
                  {
                    field.options.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            )
          }
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
              onChange={(e) => onClientInputChange(e, index)}
              error={field.error}
              inputProps={{ maxLength: field.maxLength, autoComplete: "off" }}
            />
          )
        })
      }
    </form>
  )
}

export default Client
