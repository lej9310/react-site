import React, { useCallback, useEffect, useState } from 'react';

const Callback_Ex5 = () => {

    // 1. 상태 변수 설정
    const [count, setCount] = useState(0)

    // 2. useCallback 사용하여 키보드 이벤트 핸들러 함수(handleKeyPress) 생성
    const handleKeyPress = useCallback((e) => {
        if (e.key === "ArrowUp")
            setCount((prev) => prev + 1)
    }, [])

    // 3. useEffect를 통해 컴포넌트가 마운트될 때 이벤트 리스너 등록, 언마운트 시 해제
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress)

        return () => {
            window.removeEventListener("keydown", handleKeyPress)
            console.log('나가는거 볼 수 있니?')
        }
    }, [handleKeyPress])

    return (
        <>
            <h1>예제 5.</h1>
            <div className='comment'>
                <ol>
                    <li>상태변수(count) 설정</li>
                    <li>useCallback 사용하여 키보드 이벤트 핸들러 함수(handleKeyPress) 생성</li>
                    <li>useEffect를 통해 컴포넌트가 마운트될 때 이벤트 리스너 등록, 언마운트 시 해제 </li>
                </ol>
            </div>


            <p>ArrowUp 키를 눌러 증가</p>

            {/* 화면에 count 표시 */}
            <p className='result'>Count: {count}</p>

        </>
    );
};

export default Callback_Ex5;