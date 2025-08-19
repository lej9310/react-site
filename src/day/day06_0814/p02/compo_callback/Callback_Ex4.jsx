import React, { useCallback, useEffect, useState } from 'react';

const Callback_Ex4 = () => {

    // 1. 상태변수 설정
    const [count, setCount] = useState(0)

    // 2. useCallback 사용하여 logCount 함수 정의하고 메모이제이션
    const logCount = useCallback(() => {
        console.log(`현재 Count: ${count}`)
    }, [count]) // count가 변할 때마다 logCount 함수 생성 => 콘솔에 현재 카운트 생성

    // 3. useEffect 사용하여 컴포넌트가 렌더링될 때마다 logCount 함수 호출
    useEffect(() => {
        logCount()
    }, [logCount]) // logCount 함수가 변경될 때마다 실행됨

    return (
        <>
            <h1>예제 4.</h1>
            <div className='comment'>
                <h2>클릭하면 count 1씩 증가하는 버튼 생성 </h2>
                <ol>
                    <li>상태변수(count) 설정</li>
                    <li>useCallback 사용하여 logCount 함수 정의하고 메모이제이션</li>
                    <li>useEffect 사용하여 컴포넌트가 렌더링될 때마다 logCount 함수 호출</li>
                </ol>
            </div>


            {/* 현재시카운트 값 화면에 표시 */}
            <p className='result'>Count: {count}</p>

            {/* 클릭하면 count 1씩 증가하는 버튼 생성 */}
            <button
                onClick={() => setCount((prev) => prev + 1)}>
                Count +1 증가
            </button>
        </>
    );
};

export default Callback_Ex4;