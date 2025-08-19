import React, { useEffect, useState } from 'react';

// rsc
const Example2 = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`count 값 변경: ${count}`)
        // []: 한 번만 실행
    }, [count])

    return (
        <>
            <h1>예제 2.</h1>
            <h2>useState & useEffect</h2>

            <div className='comment'>
                <p>{'const [count, setCount] = useState(0)'}</p>
                <p>{'useEffect 사용해서 count 값 변경하는 onClick 이벤트 추가'}</p>

            </div>
            <p className='result'>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </>
    );
};

// rsc
export default Example2;