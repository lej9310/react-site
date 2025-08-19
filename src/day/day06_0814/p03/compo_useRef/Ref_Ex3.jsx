import React from 'react';
import { useRef, useState } from 'react';

const Ref_Ex3 = () => {

    // 1. useRef(timerRef)와 useState(count) 선언
    const timerRef = useRef(null)
    const [count, setCount] = useState(0)

    // 2. 타이머 시작 함수 생성 - startTimer
    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000) //1초 마다 실행
        }
    }

    // 3. 타이머 정지 함수 생성 - stopTimer
    const stopTimer = () => {
        clearInterval(timerRef.current)
        timerRef.current = null
    }

    return (
        <>
            <h1>예제 3.</h1>

            <div className='comment'>
                <h2>타이머에 따라 Count 변화</h2>
                <ol>
                    <li>useRef(timerRef)와 useState(count) 선언</li>
                    <ul>
                        <li>timerRef는 타이머 ID를 저장하는 데 사용/</li>
                        <li>useRef는 컴포넌트가 리렌더링되어도 값이 유지되는 변수를 만들 때 사용</li>
                    </ul>
                    <li>타이머 시작 함수 생성 - startTimer</li>
                    <ul>
                        <li>타이머가 이미 실행 중인지 timerRef.current를 통해 확인</li>
                        <li>타이머가 작동 중이지 않을 때만 setInterval 함수로 1초(1000ms)마다 count 값을 1씩 증가</li>
                        <li>증가할 때 setCount에 이전 상태 prev를 받dma</li>
                    </ul>
                    <li>타이머 정지 함수 생성 - stopTimer</li>
                    <ul>
                        <li>clearInterval로 타이머를 중지</li>
                        <li>이후 timerRef.current를 null로 초기화해서 타이머가 멈췄음을 명확히 표시</li>
                    </ul>
                    == JSX 반환 부분 ==
                    <li>타이머 상태를 보여주는 Count 표출</li>
                    <li>시작/정지 버튼 생성: 클릭 시 각각 startTimer, stopTimer 함수 실행</li>

                </ol>
            </div>

            {/* 4. 타이머 상태를 보여주는 Count 표출 */}
            <p className='result'>Count: {count} </p>

            {/* 5. 시작/정지 버튼 생성 */}
            <button onClick={startTimer}>시작</button>
            <button onClick={stopTimer}>정지</button>
        </>
    );
};

export default Ref_Ex3;