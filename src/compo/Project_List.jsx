import { Link, Outlet } from "react-router-dom"

function Project_List() {

    return (
        <>
            {/* 하위 라우트로 이동할 링크 */}
            <div class="table">
                <table>
                    <tr class="head">
                        <td>DAY</td>
                        <td>Project</td>                        
                    </tr>

                    <tr>
                        <td>DAY04</td>
                        <td>
                            <ul>
                                <li>
                                    <Link to="D04P1">Project 1</Link>{' '}
                                </li>
                                <li>
                                    <Link to="D04P2">Project 2</Link>{' '}
                                </li>
                            </ul>
                        </td>
                    </tr>


                </table>
            </div>


            {/* 하위 컴포넌트 렌더링 위치 */}
            <Outlet />
        </>
    )
}

export default Project_List