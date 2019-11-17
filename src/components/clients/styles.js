import { makeStyles } from "@material-ui/core/styles"

const useList = makeStyles(() => ({
  title: {
    fontSize: "1rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
  },
  subtitle: {
    fontSize: "0.875rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
    color: "rgba(0, 0, 0, 0.54)",
  },
  identify: {
    width: "40px",
    height: "40px",
    display: "flex",
    overflow: "hidden",
    position: "relative",
    fontSize: "1.25rem",
    alignItems: "center",
    flexShrink: "0",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    lineHeight: "1",
    userSelect: "none",
    borderRadius: "50%",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#bdbdbd",
    marginRight: "30px",
  },
  container: {
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
  },
  vazio: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  container__list: {
    display: "flex",
    flexDirection: "row",
  },
  container__buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100px",
  },
}))

export default useList
