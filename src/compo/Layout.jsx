import { Link, Outlet } from "react-router-dom"
import project_img from '../image/project1.jpg';
import react_logo from '../image/react_logo.png';
import "../App.css"

function Layout() {
    return (
        <>
            <header className="top">
                <img src={react_logo} alt="로고" className="react_logo" />
                <nav className="topnav">
                    <Link to="project_List/" className="item btn">Project List</Link>
                    <Link to="/" className="item btn">Home</Link>
                    <Link to="signin/" className="item Signin_btn">Sign in</Link>
                </nav>
            </header>

            <main>
                <Outlet />                
                <div className="img_wrap">
                    <img src={project_img} alt="project image"></img>
                    <div className="text_on_img">My React List</div>
                </div>
            </main>
        </>
    )
}

export default Layout