import React, { useEffect, useState } from 'react';

// rsc
const ExUseEffect05 = () => {

    const [width, setWidth] = useState(window.innerWidth)

    // useEffect: 함수형 컴포넌트 안에서 작업(데이터 가져오기, DOM 조작, 이벤트 리스너, 타이머/인터벌 설정) 처리할 때 사용
    // 즉, 렌더링 이후에 발생해야 하는 동작들을 지정하는 도구
    useEffect(() => {
        const hResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", hResize)
        console.log("윈도우 리사이즈 리스너 등록")

        // Cleanup 기능: 컴포넌트가 언마운트되거나 의존성이 변경될 때 정리 작업
        return () => {
            window.removeEventListener("resize", hResize)
            console.log("윈도우 리사이즈 리스너 등록")
        }
        // 두 번째 매개변수-의존성 배열(Dependency Array)
        // 배열에 지정된 값들이 변경될 때에만 useEffect가 재실행
    }, [])


    return (
        <div>
            <h1>현재 창의 너비: {width}</h1>
        </div>
    );
};

export default ExUseEffect05;