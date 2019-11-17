import React from "react"
import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import useHome from "./styles"

const Home = () => {
  const classes = useHome()

  return (
    <Layout>
      <h1>Seja bem-vindo usuário(a)</h1>
      O sistema contem rotas de:
      <br />
      <Link to="/">Página introdutória.</Link>
      <br />
      <Link to="/client">Cadastro de usuário.</Link>
      <br />
      <Link to="/listing">Listagem com edição e exclusão.</Link>
      <br />
      <br />
      Tecnologias utilizadas: React, Redux, JSS,
      Material UI e Redux sagas como middleware para chamadas async.
      <br />
      Para manter a qualidade de codigo durante o desenvolvimento
      foi utilizado eslint e pattern para redux chamado duckPattern
      <br />
      <br />
      <div className={classes.division}>
        <span>Linkedin:</span>
        <br />
        <a href="https://www.linkedin.com/in/felipe-rodrigues-9b7439116/" target="_blank" rel="noreferrer noopener">
          <svg style={{ fill: "rgb(0, 119, 181)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </Layout>
  )
}

export default Home
