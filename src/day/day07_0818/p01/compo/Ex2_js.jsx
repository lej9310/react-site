import { useState } from 'react';
import { store_public } from '../js/store_public';

const Ex2_js = () => {

    // 1. 상태 초기화
    // store_public이라는 외부 자바스크립트 모듈에서 count 값을 초기 상태로 받아 count 상태를 설정
    // React의 내부 상태로 관리하기 위해 useState를 사용
    const [count, setCount] = useState(store_public.count)

    // 2. 버튼 클릭 시 동작 
    const handleClick = () => {
        // 버튼이 클릭되면 store_public의 increment() 함수를 호출해 외부 상태를 변경
        store_public.increment()
        // 그 후 React 내부 상태인 count를 외부 상태(store_public.count)로 업데이트하여 화면을 새로 렌더링
        setCount(store_public.count)
    }

    const handleClick2 = () => {
        // 버튼이 클릭되면 store_public의 increment() 함수를 호출해 외부 상태를 변경
        store_public.decrement()
        // 그 후 React 내부 상태인 count를 외부 상태(store_public.count)로 업데이트하여 화면을 새로 렌더링
        setCount(store_public.count)
    }

    const handleClick3 = () => {
        // 버튼이 클릭되면 store_public의 increment() 함수를 호출해 외부 상태를 변경
        store_public.reset()
        // 그 후 React 내부 상태인 count를 외부 상태(store_public.count)로 업데이트하여 화면을 새로 렌더링
        setCount(store_public.count)
    }

    return (
        <>
            <h1>예제 2. 외부 js 사용</h1>
            <div className='comment'>
                <ol>
                    <li>상태 초기화</li>
                    <ul>
                        <li>store_public이라는 외부 자바스크립트 모듈에서 count 값을 초기 상태로 받아 count 상태를 설정</li>
                        <li>React의 내부 상태로 관리하기 위해 useState를 사용</li>
                    </ul>
                    <li>버튼 클릭 시 동작 </li>
                    <ul>
                        <li>버튼이 클릭되면 store_public의 increment() 함수를 호출해 외부 상태를 변경</li>
                        <li>그 후 React 내부 상태인 count를 외부 상태(store_public.count)로 업데이트하여 화면을 새로 렌더링</li>
                    </ul>
                </ol>
            </div>

            <p className='result'>Count: {count}</p>

            <button onClick={handleClick}>
                +1 증가
            </button>

            <button onClick={handleClick2}>
                감소
            </button>

            <button onClick={handleClick3}>
                초기화
            </button>
        </>
    );
};

export default Ex2_js;