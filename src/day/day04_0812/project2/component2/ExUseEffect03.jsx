import React, { useEffect, useState } from 'react';

// rsc 치면 자동 입력
const ExUseEffect03 = () => {

    const [sec, setSec] = useState(0)

    useEffect(() => {

        // setInterval()은 clearInterval()과 같이 사용해야 함
        const timer = setInterval(
            () => {
                // setSec((prev) => prev + 1) 쓰면 계속 돌아서 안 됨
                setSec(sec + 1)
            }, 1000)

        return () => {
            clearInterval(timer)
            console.log("타이머 종료")
        }
        
        // 의존성 배열 (빈 괄호) 여기에 입력 => 없애면 계속 돌아감
    }, [])

    return (
        <div>
            <h1>{sec}초 경과</h1>
        </div>
    );
};

export default ExUseEffect03;