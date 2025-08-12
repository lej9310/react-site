import { useState } from "react"
import '../App.css'

function Login() {
    const [id, setID] = useState("")
    const [pw, setPW] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("ID", id)
        console.log("PW", pw)
    }


    return (
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
                        <button className="clear-button" onClick={() => setID("")}>
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
                        <button className="clear-button" onClick={() => setPW("")}>
                            X
                        </button>
                    )}
                </div>

                <button type="submit" className="login-button">로그인</button>

            </form>
        </div>
    )
}

export default Login