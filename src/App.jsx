import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./compo/Login"
import Home from "./compo/Home"
import Layout from "./compo/Layout"
import Project_List from "./compo/Project_List"
import D04P1 from "./day/day04_0812/project1/D04P1"
import D04P2 from "./day/day04_0812/project2/D04P2"
import D05P1 from "./day/day05_0813/p01-useeffect/D05P1"
import D05P2 from "./day/day05_0813/p02-usemap/D05P2"


function App() {
  
  return (
    <>
      <h1>이은정의 과제방</h1>

      {/* URL 경로에 따라 다른 컴포넌트 렌더링 */}
      <BrowserRouter>
        <Routes>
          {/* 깃헙은 root가 아니라, Repository 물고 들어옴 */}
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login/" element={<Login />} />
          
          {/* project_List 안에 하위 라우트 설정*/}
          <Route path="/react-site/project_List/" element={<Project_List />} />
          <Route path="/react-site/project_List/D04P1/" element={<D04P1 />} />
          <Route path="/react-site/project_List/D04P2/" element={<D04P2 />} />
          <Route path="/react-site/project_List/D05P1/" element={<D05P1 />} />
          <Route path="/react-site/project_List/D05P2/" element={<D05P2 />} />
          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
