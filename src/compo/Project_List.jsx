import React from "react"
import { Route } from "react-router-dom"

function Project_List() {
    return (
        <div>
            <h2>이은정의 Project List</h2>
            <nav>
                <Link to="project1">프로젝트 1</Link>
                <Link to="project2">프로젝트 2</Link>
            </nav>

            <Routes>
                <Route
                    path="../day/day04_0812/project1/App"
                    element={}
                />
                <Route
                    path="../day/day04_0812/project1/App"
                    element={}
                />
            </Routes>

        </div>
    )
}

export default Project_List