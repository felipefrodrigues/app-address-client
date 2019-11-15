import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Container from "@material-ui/core/Container"
import Home from "./pages/home"
import Client from "./pages/client"
import Listing from "./pages/listing"
import ToggleBar from "./components/toggleBar"
import Header from "./components/header"
import useApp from "./styles"

const App = () => {
  const classes = useApp()
  return (
    <Router>
      <ToggleBar />
      <Header />
      <article className={classes.root}>
        <Container maxWidth="lg">
          <Switch>
            <Route path="/client">
              <Client />
            </Route>
            <Route path="/listing">
              <Listing />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </article>
    </Router>
  )
}

export default App
