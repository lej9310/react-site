import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

const Callback_Ex1 = () => {

    // setCount로 상태를 변경하는 함수 생성
    const [count, setCount] = useState(0)

    // 렌더링 최적화    
    // useCallback으로 자식 컴포넌트에 함수가 props로 넘어갈 때 불필요한 렌더링을 줄임
    const handleIncrement = useCallback(() => {
        //  setCount를 호출하여 현재 count 상태 값을 1씩 증가
        setCount((prev) => prev + 1)
        // 빈 의존성배열: 컴포넌트가 처음 렌더링될 때 한 번만 생성되어 메모이제이션
    }, [])


    return (
        <>
            <div className='comment'>
                <h2>React Hook이란?</h2>
                <h4>: 함수형 컴포넌트에서 상태(state)와 생명주기(lifecycle) 기능을 사용할 수 있도록 도와주는 기능</h4>
                <h3>Hook의 종류</h3>
                <ul>
                    <li>useState:상태 관리</li>
                    <li>useEffect: 컴포넌트가 렌더링될 때 특정 작업(예: 데이터 fetch 등)을 수행하도록 할 때 사용</li>
                    <li>useRef: 특정 DOM 요소나 값에 대한 참조를 유지할 때 사용</li>
                    <li>useContext: 컴포넌트 트리 깊숙한 곳에 있는 전역 상태를 쉽게 가져올 수 있게 해줌</li>
                </ul>
                <h4>
                    {"* useCallback이란?"} <br />
                    {"함수의 참조를 고정해서, 의존성 배열 내 값이 변경되지 않으면 같은 함수를 계속 재사용하는 역할"}
                </h4>

            </div>


            <h1>예제 1. useCallback</h1>

            <p className='result'>Count: {count}</p>
            <button onClick={handleIncrement}>1씩 증가</button>

        </>
    );
};

export default Callback_Ex1;