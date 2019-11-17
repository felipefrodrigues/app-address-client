import { makeStyles } from "@material-ui/core/styles"

const useStep = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  finishStep: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    lineHeight: "50px",
  },
  finishMsg: {
    fontSize: "20px",
  },
}))

export default useStep
