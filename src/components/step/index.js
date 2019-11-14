import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import useStep from "./styles"
import Client from "../client"
import Address from "../address"
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
  const { stepsTitle, activeStep } = useSelector((state) => state.stepState)

  const handleNext = (step) => {
    dispatch({ type: "VALIDATE_FIELDS", step })
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
      <div>
        {activeStep === stepsTitle.length ? (
          <div>
            <Button onClick={handleReset} className={classes.button}>
              Clique para fazer um novo cadastro
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNext(activeStep)}
                className={classes.button}
              >
                {activeStep === stepsTitle.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContainerStep
