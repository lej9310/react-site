import React, { useCallback, useState } from 'react';

const Callback_Ex3 = () => {

    // 1. 상태변수 설정
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    // 2. useCallback으로 increment 함수 정의
    const increment = useCallback(() => {
        setCount((prev) => prev + step) // count를 이전 값(prev)에 step만큼 더함
    }, [step]) // step이 변경될 때만 함수가 다시 생성됨

    return (
        <>
            <h1>예제 3.</h1>
            <div className='comment'>
                <h2>버튼 클릭 시 step만큼 count 증가</h2>
                <ol>
                    <li>상태변수 설정(count, step)</li>
                    <li>
                        useCallback으로 increment 함수 정의
                        <ul>
                            <li>count를 이전 값(prev)에 step만큼 더함</li>
                            <li>의존성 배열-step이 변경될 때만 함수가 다시 생성되도록</li>                            
                        </ul>
                    </li>
                    <li>input 값을 step 상태와 연결 & 입력값 변경 시, step 상태 업데이트</li>
                    <li>버튼 생성: 클릭 시 step만큼 count 증가</li>
                </ol>
            </div>

            <p className='result'>Count: {count}</p>

            {/* input 값은 step 상태와 연결 */}
            step: <input
                type="number"
                value={step}
                // 입력값 변경 시 step 상태 업데이트 (문자열 → 숫자
                onChange={(e) => setStep(Number(e.target.value))}
            />

            <br /><br />

            {/* 버튼 클릭 시 step만큼 count 증가 */}
            <button onClick={increment}>step만큼 증가</button>
        </>
    );
};

export default Callback_Ex3;