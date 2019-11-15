import { makeStyles } from "@material-ui/core/styles"

const useAddress = makeStyles((theme) => ({
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
  cep: {
    marginBottom: "10px",
  },
}))

export default useAddress
