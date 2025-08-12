import React, { useEffect, useState } from 'react';

// rsc치면 자동 입력
const ExUseEffect02 = () => {

    const [count, setCount] = useState(0)
    
    // useEffect(<function>, <dependency>)
    useEffect(
        () => {
            console.log(`count 값 변경될 때마다 실행 ${count}`)
        }, [count])

    return (
        <div>
            <p>카운트 {count}</p>
            <button onClick={() => setCount(count + 1)}>++1 증가</button>
        </div>
    );
};

export default ExUseEffect02;