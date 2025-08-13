import React, { useEffect, useState } from 'react';

const Example5 = () => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])




    return (
        <div>
            <h1>예제 5.</h1>
            <h2>윈도우 크기 감지</h2>

            <p style={{ color: 'red' }}>현재 너비: {width}px</p>

        </div>
    );
};

export default Example5;