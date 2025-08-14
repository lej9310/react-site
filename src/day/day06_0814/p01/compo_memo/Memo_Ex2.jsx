import React, { useMemo, useState } from 'react';

// ================================
// 사용자가 입력한 숫자(num)를 1e7번 반복(10,000,000번)하여 total 값 반환

function heavyCalculation(num) {
    console.log("무거운 계산 실행 중....")

    let total = 0
    for (let i = 0; i < 1e7; i++) {
        // total += num
        total = total + num
    }

    return total
}

// ================================
const Memo_Ex2 = () => {

    // 1. 상태변수 설정
    const [num, setNum] = useState(1)
    const [theme, setTheme] = useState(false)

    // 2. useMemo를 사용하여 복잡한 계산(사용자 정의 함수) 수행
    const total = useMemo(() => {
        heavyCalculation(num)
        // num 값이 변경될 때만 연산 다시 수행, 변경 없으면 캐싱된 결과(total) 반환
    }, [num])

    return (
        <>
            <h1>Memo_Ex2</h1>
            <h4>1. useMemo를 사용하여 복잡한 계산 성능 최적화</h4>
            <h4>2. theme 상태에 따라 배경색, 텍스트 색상 변경</h4>


            <div style={{
                background: theme ? "#222" : "#fbfd88ff",
                color: theme ? "#fff" : "#ff0000ff",
            }}>

                {/* 사용자가 숫자를 입력하면 onChange 이벤트를 통해 num 값 변경 */}
                <input
                    type="number"
                    value={num}
                    onChange={(e) => setNum(Number(e.target.value))} />

                <p>결과 {total}</p>

                <button
                    style={{ color: 'white', background: 'green' }}
                    onClick={() => setTheme((t) => !t)}>
                    테마 변경
                </button>
            </div>
        </>

    );
};

export default Memo_Ex2;