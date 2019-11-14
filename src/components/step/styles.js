import { makeStyles } from "@material-ui/core/styles"

const useStep = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

export default useStep
