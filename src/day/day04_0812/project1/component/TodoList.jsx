import { useState } from "react"

export default function TodoList() {

    const [todo, setTodo] = useState("")
    const [add, setAdd] = useState([])

    const addTodo = () => {
        if (todo.trim()) {
            // 할 일을 추가하면, add에 값을 추가
            setAdd([...add, todo])
            // todo 상태를 초기화
            setTodo("")
        }
    }

    return (
        <>
            <h1>TodoList Component 추가</h1>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="할 일을 입력하세요." />

            <button onClick={addTodo}>추가</button>

            <ul>
                {
                    add.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}