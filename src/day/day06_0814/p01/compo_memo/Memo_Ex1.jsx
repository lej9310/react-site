import React, { useMemo, useState } from 'react';

// rsc
const Memo_Ex1 = () => {
    const [count, setCount] = useState(0)

    // useMemo
    const double = useMemo(() => {
        console.log("double 값 계산 중...")
        return count * 2
        // 의존성 배열: count가 변하면 계산 업데이트
    }, [count])

    return (
        <>
            <h1>예제 1. useMemo</h1>

            <p className='result'>count:{count}</p>
            <p className='result'>double:{double}</p>
            <button onClick={() => setCount(c => c + 1)}>더하기 1</button>
        </>
    );
};

export default Memo_Ex1;