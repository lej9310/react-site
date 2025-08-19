import React from 'react';
import { store_zustand } from '../js/store_zustand';

const Ex3_zustand = () => {

    // 1. zustand로 만든 상태관리 훅
    // 상태값(count)와 상태를 변경하는 함수들(increment, decrement, reset)생성
    const { count, increment, decrement, reset } = store_zustand()

    return (
        <>
            <h1>예제 3. zustand 상태관리 훅</h1>

            <div className='comment'>
                <ol>
                    <li>zustand 설치</li>
                    <ul>
                        <li>npm install zustand</li>
                        <li>node_module 들어가서 확인</li>
                        <li>Zustand는 React 외부에서 상태를 관리하지만, React 컴포넌트는 상태를 훅으로 받아 자동으로 구독하여 값이 변경되면 리렌더링</li>
                    </ul>
                    <li>
                        zustand로 상태관리 훅 생성
                    </li>
                    <ul>                        
                        <li>상태값(count)와 상태를 변경하는 함수들(increment, decrement, reset)생성</li>
                    </ul>
                </ol>
            </div>

            <p className='result'>Count: {count}</p>

            <button onClick={increment}>
                +1 증가
            </button>

            <button onClick={decrement}>
                -1 감소
            </button>

            <button onClick={reset}>
                초기화
            </button>

        </>
    );
};

export default Ex3_zustand;