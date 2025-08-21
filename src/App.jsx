import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
//  ===============================
import Signin from "./compo/Signin"
import Home from "./compo/Home"
import Layout from "./compo/Layout"
import Project_List from "./compo/Project_List"
// 프로젝트 목록 계속 추가 ===============================
import D04P1 from "./day/day04_0812/project1/D04P1"
import D04P2 from "./day/day04_0812/project2/D04P2"
import D05P1 from "./day/day05_0813/p01-useeffect/D05P1"
import D05P2 from "./day/day05_0813/p02-usemap/D05P2"
import D06P1 from "./day/day06_0814/p01/D06P1"
import D06P2 from "./day/day06_0814/p02/D06P2"
import D06P3 from "./day/day06_0814/p03/D06P3"
import D07P1 from "./day/day07_0818/p01/D07P1"
import D07P2 from "./day/day07_0818/p02/D07P2"
import PostViewPage from "./day/day07_0818/p02/components/pages/PostViewPage"
import PostWritePage from "./day/day07_0818/p02/components/pages/PostWritePage"

function App() {

  return (
    <BrowserRouter basename="/react-site/">
      <Routes>
        {/* Layout을 최상위 요소로 설정 */}
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="project_List" element={<Project_List />} />
        </Route>
        
        {/* 하위 페이지: Layout 내부에서 Outlet으로 렌더링 */}
        <Route path="project_List/D04P1" element={<D04P1 />} />
        <Route path="project_List/D04P2/" element={<D04P2 />} />
        <Route path="project_List/D05P1/" element={<D05P1 />} />
        <Route path="project_List/D05P2/" element={<D05P2 />} />
        <Route path="project_List/D06P1/" element={<D06P1 />} />
        <Route path="project_List/D06P2/" element={<D06P2 />} />
        <Route path="project_List/D06P3/" element={<D06P3 />} />
        <Route path="project_List/D07P1/" element={<D07P1 />} />
        <Route path="project_List/D07P2/*" element={<D07P2 />} />

        {/* 루트에서 직접 접근 가능한 postId 경로 추가 */}
        <Route path="/post/:postId" element={<PostViewPage />} />
        <Route path="/post-write" element={<PostWritePage />} />

      </Routes>
    </BrowserRouter >
  )
}

export default App
