import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import './App.css'
import Login from "./compo/Login"
import Home from "./compo/Home"
import Layout from "./compo/Layout"

function App() {
  
  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
