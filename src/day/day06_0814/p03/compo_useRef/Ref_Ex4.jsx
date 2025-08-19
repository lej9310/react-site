import { useEffect, useRef, useState } from 'react';

const Ref_Ex4 = () => {

    // 1. 상태변수(value), 레퍼런스(prevValue) 생성
    const [value, setValue] = useState("")
    // prevValue는 현재 렌더링 시점에서 기억하고 싶은 이전 값을 저장하는 용도로 사용
    // useRef는 변경해도 컴포넌트 재렌더링을 유발하지 않는 .current 프로퍼티를 갖는 객체를 반환
    const prevValue = useRef("")

    // 2. Effect 처리
    useEffect(() => {
        // 호출 시점에 prevValue.current를 현재 value로 업데이트하여, 다음 렌더링 시 이전 값을 기억하도록 
        prevValue.current = value
    }, [value]) //value가 변경될 때마다 호출


    return (
        <>
            <h1>예제 4.</h1>

            <div className='comment'>
                <h2>현재값/이전값</h2>
                <ol>
                    <li>상태변수(value) & 레퍼런스(prevValue) 생성</li>
                    <ul>
                        <li>prevValue는 현재 렌더링 시점에서 기억하고 싶은 이전 값을 저장하는 용도로 사용</li>
                        <li>의존성 배열 - value가 변경될 때마다 호출</li>
                    </ul>
                    <li>Effect 처리</li>
                    == 렌더링 부분 ==
                    <li>입력 폼(input)에 value 상태를 연결하고, 변경 시 setValue로 업데이트</li>
                    <li>현재 값(value)과 이전 값(prevValue.current)을 각각 텍스트로 표출</li>
                </ol>
            </div>

            {/* 3. 입력 폼(input)에 value 상태를 연결하고, 변경 시 setValue로 업데이트 */}
            <input value={value} onChange={(e) => setValue(e.target.value)} />

            {/* 4. 현재 값(value)과 이전 값(prevValue.current)을 각각 텍스트로 표출 */}
            <p className='result'>현재 값: {value}</p>
            <p className='result'>이전 값: {prevValue.current}</p>
        </>
    );
};

export default Ref_Ex4;