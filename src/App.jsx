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

      {/* URL 경로에 따라 다른 컴포넌트 렌더링 */}
      <BrowserRouter>
        <Routes>
          {/* 깃헙은 root가 아니라, Repository 물고 들어옴 */}
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login/" element={<Login />} />
          <Route path="/react-site/project_List/" element={<Project_List />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
