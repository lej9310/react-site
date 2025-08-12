import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Counter Component 추가</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}> ++1 증가 버튼 </button>
            <button onClick={() => setCount(count - 1)}>--1 증가 버튼</button>
        </>
    )
}