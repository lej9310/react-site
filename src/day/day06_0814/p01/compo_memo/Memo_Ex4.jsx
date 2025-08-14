import React, { useMemo, useState } from 'react';

// 자식 컴퍼넌트 ==============================
// config라는 props를 받고, 그 안의 theme 값을 화면에 출력
// 렌더링될 때마다 콘솔에 "Child 렌더링"을 찍음
function Child({ config }) {
    console.log('Child 렌더링')
    return (
        < div > Theme: {config.theme}</div >
    )
}

// 부모 컴포넌트: Memo_Ex4 ====================
const Memo_Ex4 = () => {

    // 상태값 두 개 선언
    const [theme, setTheme] = useState('light')
    const [count, setCount] = useState(0)

    // config 객체를 useMemo로 감싸기
    const config = useMemo(
        () => {
            console.log('test')
            return ({ theme })
            // theme 값이 변경될 때만 새로운 객체 생성
        }, [theme])


    // 
    return (
        <>
            <h1>예제 4.</h1>
            {/* Child 컴포넌트에 config 객체를 props로 넘김 */}
            <Child config={config} /><br />

            <button
                // 삼항연산
                onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
                테마 변경
            </button>

            <button
                onClick={() => setCount(c => c + 1)}>
                Count: {count}
            </button>
        </>
    );
};

export default Memo_Ex4;