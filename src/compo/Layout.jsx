import { Link, Outlet } from "react-router-dom"
import project_img from '../image/project1.jpg';
import logo from '../image/react_logo.png';

function Layout() {
    return (
        <>
            {/* 상단 로고 영역 */}
            <header className="img_wrap">
                <img src={project_img} alt="project image"></img>
                <div class="text_on_img">My React List</div>
            </header>

            <nav className="nav-menu">
                <div className="Menu-box">
                    <img src={logo} alt="로고" className="logo" />
                    <h2>MENU</h2>
                </div>

                <div className="Layout_box">
                    <Link to="/react-site/">Home</Link>
                </div>

                <div className="Layout_box">
                    <Link to="/react-site/login/">Login</Link>
                </div>

                <div className="Layout_box">
                    <Link to="/react-site/project_List/">Project List</Link>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    )
}

export default Layout