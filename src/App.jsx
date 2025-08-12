import { BrowserRouter, HashRouter, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import './App.css'
import Login from "./compo/Login"
import Home from "./compo/Home"
import Layout from "./compo/Layout"
import Project_List from "./compo/Project_List"

function App() {
  
  return (
    <>
      <h1>과제방</h1>
      <HashRouter>
        <Routes>
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login" element={<Login />} />
          <Route path="/react-site/project_List" element={<Project_List />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
