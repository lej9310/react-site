import React, { memo, useCallback, useState } from 'react';

// 1. Child 컴포넌트 =========================
// .memo로 감싼 함수형 컴포넌트
// memo는 전달된 props가 변경되지 않으면 컴포넌트를 재렌더링하지 않아 불필요한 렌더링을 줄여줌
// onClick이라는 함수 props를 받고 버튼 클릭 시 이 함수를 실행
const Child = memo(({ onClick }) => {
    console.log('자식 렌더링')

    return (
        <button onClick={onClick}>자식에서 카운트 증가</button>
    )
})


// ==========================
const Callback_Ex2 = () => {

    const [count, setCount] = useState(0)

    // increment 함수: 상태를 1씩 증가
    const increment = useCallback(() => {
        setCount((prev) => prev + 1)
        // 빈 배열
    }, [])

    return (
        <>
            <h1>예제 2.</h1>

            <div className='comment'>
                <ol>
                    <li>Child 컴포넌트 생성</li>
                    <ul>
                        <li></li>
                        <li>콘솔에 "자식 렌더링" 출력해서 렌더링 여부 확인하기</li>
                    </ul>
                    <li></li>
                    <li></li>
                </ol>
            </div>


            {/* count 값을 화면에 표시*/}
            <p className='result'>Count: {count}</p>

            {/* Child 컴포넌트에 increment 함수를 onClick prop으로 전달  */}
            <Child onClick={increment} />
        </>
    );
};

export default Callback_Ex2;