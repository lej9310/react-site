import React, { useEffect } from 'react';

// rsc 작성하면 자동으로 입력됨
const ExUseEffect01 = () => {

    useEffect(
        () => {
            console.log("컴포넌트가 마운트되었습니다.")
        }, [])

    return (
        <div>
            <h1>안녕 UseEffect</h1>
        </div>
    );
};

export default ExUseEffect01;