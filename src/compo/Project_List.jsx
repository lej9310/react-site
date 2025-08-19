import { Link, Outlet } from "react-router-dom"

function Project_List() {

    return (
        <>
            {/* 하위 라우트로 이동할 링크 */}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>DAY</td>
                            <td>DATE</td>
                            <td>Project</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>DAY01</td>
                            <td>08.07.(목)</td>
                            <td>
                                <ul>
                                    <li>
                                        <Link to="D04P1">채워야함</Link>
                                    </li>
                                    <li>
                                        <Link to="D04P2">채워야함</Link>
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
                                        <Link to="D04P1">채워야함</Link>
                                    </li>
                                    <li>
                                        <Link to="D04P2">채워야함</Link>
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
                                        <Link to="D04P1">채워야함</Link>
                                    </li>
                                    <li>
                                        <Link to="D04P2">채워야함</Link>
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
                                        <Link to="D04P2">Hook: UseEffect </Link>
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
                                        <Link to="D05P1">Hook: useEffect</Link>
                                    </li>
                                    <li>
                                        <Link to="D05P2">useMap</Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td>DAY06</td>
                            <td>08.14.(목)</td>
                            <td>
                                <ul>
                                    <li>
                                        <Link to="D06P1">Memo</Link>
                                    </li>
                                    <li>
                                        <Link to="D06P2">Callback</Link>
                                    </li>
                                    <li>
                                        <Link to="D06P3">Ref</Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td>DAY07</td>
                            <td>08.18.(월)</td>
                            <td>
                                <ul>
                                    <li>
                                        <Link to="D07P1">Provider, JS, Zustand, Redux Toolkit</Link>
                                    </li>
                                    <li>
                                        {/* <Link to="mini">소플의 mini blog 제작 </Link> */}
                                    </li>
                                </ul>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>

            {/* 하위 컴포넌트 렌더링 위치 */}
            <Outlet />
        </>
    )
}

export default Project_List