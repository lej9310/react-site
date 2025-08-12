import { useState } from "react"
export default function InputMirror() {

    const [text, setText] = useState("")
    
    return(
        <>
        <h1>InputMirror Component 추가</h1>
        <input 
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="텍스트를 입력하세요."
        />

        <p>입력된 값: {text}</p>
        </>
    )
}