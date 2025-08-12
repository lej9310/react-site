import { useState } from "react"

export default function Toggle() {

    const [ison, setIson] = useState(false)

    return (
        <>
            <h2>Boolean값의 상태 변화 체크</h2>
            <button onClick={() => setIson(!ison)}>
                {ison ? "ON" : "OFF"} 버튼
            </button>
        </>
    )
}