import React, { use, useMemo, useState } from 'react';

const Memo_Ex1 = () => {

    // <상태변수 생성>
    // const [state 변수, setState 함수] = useState(초기값)
    // state 변수: 상태 값을 저장하는 함수
    // setState 함수: 상태값을 변경하는 함수
    // 초기값: 상태변수의 초기값
    const [count, setCount] = useState(0)

    // useMemo를 사용하여 double 값 계산    
    const double = useMemo(() => {
        console.log('double 값 계산 중...')

        return count * 2
        // , [count]: count 값이 변경될 때마다 double 값 재계산
    }, [count])

    return (
        <>
            <h1>Memo_Ex1</h1>
            <h2> useState & useMemo 사용하여 count/double 생성</h2>
            <p style={{ color: 'blue' }}>1. count 상태변수 생성: {"const [count, setCount] = useState(0)"}</p>
            <p style={{ color: 'blue' }}>2. useMemo를 사용하여 double 값 계산:
                {"const double = useMemo(() => {count * 2}, [count])"}</p>

            <p style={{ color: 'red' }}>count: {count}</p>
            <p style={{ color: 'red' }}>double: {double}</p>

            {/* 버튼 클릭하면 setCount 함수를 통해 카운트 1씩 증가 */}
            <p style={{ color: 'blue' }}>3. 버튼: setCount 함수 이용하여 count 값의 1씩 증가: {"<button onClick={() => setCount(c => c + 1)}></button>"}</p>
            <button style={{color:'white', background:'green'}} onClick={() => setCount(c => c + 1)}>++1씩 증가</button>
        </>
    );
};

export default Memo_Ex1;