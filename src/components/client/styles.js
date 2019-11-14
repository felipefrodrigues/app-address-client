import { makeStyles } from "@material-ui/core/styles"

const useClientForm = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    marginTop: "0px",
  },
  radioGroup: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: "16px",
  },
}))

export default useClientForm
