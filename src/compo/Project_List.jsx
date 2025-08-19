import { Link, Outlet } from "react-router-dom"

function Project_List() {

    return (
        <>
            {/* 하위 라우트로 이동할 링크 */}
            <div>
                <table>
                    <tr className="head">
                        <td>DAY</td>
                        <td>DATE</td>
                        <td>Project</td>                        
                    </tr>

                     <tr>
                        <td>DAY01</td>
                        <td>08.07.(목)</td>
                        <td>
                            <ul>
                                <li>
                                    <Link to="D04P1">채워야함</Link>{' '}
                                </li>
                                <li>
                                    <Link to="D04P2">채워야함</Link>{' '}
                                </li>
                            </ul>
                        </td>
                    </tr>

                     <tr>
                        <td>DAY02</td>
                        <td>08.08.(금)</td>
                        <td>
                            <ul>
                                <li>
                                    <Link to="D04P1">채워야함</Link>{' '}
                                </li>
                                <li>
                                    <Link to="D04P2">채워야함</Link>{' '}
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>DAY03</td>
                        <td>08.11.(월)</td>
                        <td>
                            <ul>
                                <li>
                                    <Link to="D04P1">채워야함</Link>{' '}
                                </li>
                                <li>
                                    <Link to="D04P2">채워야함</Link>{' '}
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>DAY04</td>
                        <td>08.12.(화)</td>
                        <td>
                            <ul>
                                <li>
                                    <Link to="D04P1">Component 생성: Counter, InputMirror, ColorChange, TodoList</Link>{' '}
                                </li>
                                <li>
                                    <Link to="D04P2">Hook: UseEffect </Link>{' '}
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>DAY05</td>
                        <td>08.13.(수)</td>
                        <td>
                            <ul>
                                <li>
                                    <Link to="D05P1">Hook: useEffect</Link>{' '}
                                </li>
                                <li>
                                    <Link to="D05P2">useMap</Link>{' '}
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