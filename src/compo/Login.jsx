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
        <div>
            <h2>LOGIN PAGE</h2>
            {/* 로그인 폼 컴포넌트 추가 */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">아이디</label>
                    <input
                        id="id"
                        type="text"
                        value={id}
                        onChange={(e) => setID(e.target.value)}
                        required
                        placeholder="아이디를 입력하세요."
                    />
                </div>
                <div>
                    <label htmlFor="pw">비밀번호</label>
                    <input
                        id="pw"
                        type="password"
                        value={pw}
                        onChange={(e) => setPW(e.target.value)}
                        required
                        placeholder="비밀번호를 입력하세요."
                    />
                </div>
                <button clssName="Login-button">버튼</button>
                
            </form>
        </div>
    )
}

export default Login