import React, { useEffect, useState } from 'react';

// rsc
const Example2 = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`count 값 변경: ${count}`)
        // []: 한 번만 실행
    }, [count])

    return (
        <div>
            <h1>예제 2.</h1>
            <h2>useState & useEffect</h2>

            <p style={{color: 'blue'}}>const [count, setCount] = useState(0)</p>
            <p style={{ color: 'red' }}>Count: {count}</p>
            
            <p style={{color: 'blue'}}>useEffect 사용해서 count 값 변경하는 onClick 이벤트 추가</p>
            <button onClick={() => setCount(count + 1)}>증가</button>

        </div>
    );
};

// rsc
export default Example2;