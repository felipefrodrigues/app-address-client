import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import useStep from "./styles"
import Client from "../stepClient"
import Address from "../stepAddress"
import { Creators } from "../../state/ducks/step"

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <Client />
    case 1:
      return <Address />
    case 2:
      return "obrigado"
    default:
      return "Unknown step"
  }
}

const ContainerStep = () => {
  const classes = useStep()
  const dispatch = useDispatch()
  const { stepsTitle, activeStep, editMode } = useSelector((state) => state.stepState)

  const handleNext = (step) => {
    dispatch({ type: "ASYNC_VALIDATE_FIELDS", step, editMode })
  }

  const handleBack = () => {
    dispatch(Creators.backStep())
  }

  const handleReset = () => {
    dispatch(Creators.resetStep())
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {stepsTitle.map((label) => {
          const stepProps = {}
          const labelProps = {}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div className={classes.finishStep}>
        {activeStep === stepsTitle.length ? (
          <div>
            <span className={classes.finishMsg}>Obrigado por se cadastrar</span>
            <div>
              <Link to="/listing">Listagem</Link>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleReset}
              >
                Novo Cadastro
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Voltar
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNext(activeStep)}
                className={classes.button}
              >
                {activeStep === stepsTitle.length - 1 ? "Finalizar" : "Proximo"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContainerStep
