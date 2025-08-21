import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../App.css'
import reactLogo from "../image/react_logo.png"

function Signin() {
    const [id, setID] = useState("")
    const [pw, setPW] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("ID", id)
        console.log("PW", pw)
    }

    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <div className="signin-wrapper">
            {/* 로고 이미지 클릭하면 홈으로 */}
            <img
                src={reactLogo}
                alt="React Logo"
                className="signin-logo"
                style={{ cursor: "pointer", width: "150px", marginBottom: "20px" }}
                onClick={handleLogoClick}
            />


            <div className="form-container">
                {/* 로그인 폼 컴포넌트 추가 */}
                <form onSubmit={handleSubmit}>

                    <div className="id-container">
                        <label htmlFor="id">아이디</label>
                        <input
                            id="id"
                            type="text"
                            value={id}
                            onChange={(e) => setID(e.target.value)}
                            required
                            placeholder="아이디 또는 전화번호"
                        />
                        {id && (
                            <button
                                type="button"
                                className="clear-button"
                                onClick={() => setID("")}
                            >
                                X
                            </button>
                        )}
                    </div>

                    <div className="input-container">
                        <label htmlFor="pw">비밀번호</label>
                        <input
                            id="pw"
                            type="password"
                            value={pw}
                            onChange={(e) => setPW(e.target.value)}
                            required
                            placeholder="비밀번호"
                        />
                        {pw && (
                            <button
                                type="button"
                                className="clear-button"
                                onClick={() => setPW("")}>
                                X
                            </button>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="Signin-button">
                        로그인
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Signin