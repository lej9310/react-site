import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./compo/Login"
import Home from "./compo/Home"
import Layout from "./compo/Layout"
// 프로젝트 목록 계속 추가
import Project_List from "./compo/Project_List"
import D04P1 from "./day/day04_0812/project1/D04P1"
import D04P2 from "./day/day04_0812/project2/D04P2"
import D05P1 from "./day/day05_0813/p01-useeffect/D05P1"
import D05P2 from "./day/day05_0813/p02-usemap/D05P2"
import D06P1 from "./day/day06_0814/p01/D06P1"
import D06P2 from "./day/day06_0814/p02/D06P2"
import D06P3 from "./day/day06_0814/p03/D06P3"
import D07P1 from "./day/day07_0818/p01/D07P1"

function App() {
  
  return (
    <>     

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

          <Route path="/react-site/project_List/D06P1/" element={<D06P1 />} />
          <Route path="/react-site/project_List/D06P2/" element={<D06P2 />} />
          <Route path="/react-site/project_List/D06P3/" element={<D06P3 />} />

          <Route path="/react-site/project_List/D07P1/" element={<D07P1 />} />
          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
