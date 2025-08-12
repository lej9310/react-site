import { useState } from "react"

export default function ColorChange() {

    const [color, setColor] = useState("pink")

    return (
        <>
            <h1 style={{ color }}>ColorChange Component 추가</h1>

            <button onClick={() => setColor("red")}>빨강</button>
            <button onClick={() => setColor("orange")}>주황</button>
            <button onClick={() => setColor("yellow")}>노랑</button>
            <button onClick={() => setColor("green")}>초록</button>
            <button onClick={() => setColor("blue")}>파랑</button>
            <button onClick={() => setColor("purple")}>보라</button>

        </>
    )
}