import { BrowserRouter, Routes } from "react-router-dom"
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
      <BrowserRouter>
        <Routes>
          <Route path="/react-site2/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site2/login" element={<Login />} />
          <Route path="/react-site2/project_List" element={<Project_List />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
