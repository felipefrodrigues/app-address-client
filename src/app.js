import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { useDispatch } from "react-redux"
import Container from "@material-ui/core/Container"
import Home from "./pages/home"
import Client from "./pages/client"
import Listing from "./pages/listing"
import ToggleBar from "./components/toggleBar"
import Header from "./components/header"

const App = () => {
  const dispatch = useDispatch()
  dispatch({ type: "ASYNC_GET_CLIENTS" })
  return (
    <Router>
      <ToggleBar />
      <Header />
      <main>
        <Container maxWidth="xl">
          <Switch>
            <Route path="/client/:id">
              <Client />
            </Route>
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
      </main>
    </Router>
  )
}

export default App
