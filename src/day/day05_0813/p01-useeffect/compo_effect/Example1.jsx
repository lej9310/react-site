import React, { useEffect } from 'react';

// rsc
const Example1 = () => {

    useEffect(() => {
        console.log("컴포넌트가 마운트 되었습니다.")
        // ,[] : 한 번만 실행 시킨다
    }, [])

    return (
        <div>
            <h1>예제 1.</h1>
            <h2>useEffect: 마운트 시 콘솔 출력</h2>
            <p style={{color:'blue'}}>useEffect(() => {}, [])</p>
        </div>
    );
};

export default Example1;