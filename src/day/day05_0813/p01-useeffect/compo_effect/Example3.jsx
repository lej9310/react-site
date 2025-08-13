import React, { useEffect, useState } from 'react';

const Example3 = () => {

    const [sec, setSec] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setSec(sec + 1)
        }, 1000)

        // 타이머 종료/콘솔에 메세지 출력
        return () => {
            clearInterval(timer)
            console.log("타이머 종료")
        }
    }, [])

    return (
        <div>
            <h1>예제 3.</h1>
            <h2>useEffect 사용해 1초마다 setSec 함수를 호출하는 타이머 설정</h2>
            <p>타이머가 종료되면 clearInterval 함수로 타이머를 해제하고 콘솔에 메세지 출력</p>
            <h2>setInterval - Timer 생성</h2>

            <p style={{color: 'blue'}}>const [sec, setSec] = useState(0)</p>
            
            <p style={{color:'red'}}>{sec}초 경과</p>

        </div>
    );
};

export default Example3;