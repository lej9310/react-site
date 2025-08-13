import React, { useMemo, useState } from 'react';

// ==============================================
// 내부에서 사용할 때 export/import 필요 없음
// 자식 컴퍼넌트
function Child({config}) {
    console.log("Child 렌더링")
    
    return (
        <div>오늘의 테마: {config.theme}</div>
    )
}

// ==============================================
const Memo_Ex4 = () => {

    const [theme, setTheme] = useState("light")
    const [count, setCount] = useState(0)

    const config = useMemo(
        () => ({ theme }), [theme]
    )


    return (
        <div>
            <h1>예제 4.</h1>
            <p style={{ color: 'blue' }}></p>

            {/* 컴포넌트 */}
            <Child config={config} />

            <button
                style={{ color: 'white', background: 'green' }}
                onClick={() => setTheme(
                    (t) => (t === "litgh" ? "dark" : "light")
                )}>
                테마 변경
            </button>

            <button
                style={{ color: 'white', background: 'green' }}
                onClick={() => setCount((c) => c + 1)}>
                Count: {count}
            </button>
        </div >
    );
};

export default Memo_Ex4;