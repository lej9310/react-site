import { useRef, useState } from 'react';

const Ref_Ex2 = () => {

    const renderCount = useRef(0)
    const [text, setText] = useState("")

    renderCount.current += 1

    return (
        <>
            <h1>예제 2.</h1>
            <div className='comment'>

            </div>

            <input
                value={text}
                onChange={(e) => setText(e.target.val)}
            />


            <p>렌더링 횟수: {renderCount.current}</p>
        </>
    );
};

export default Ref_Ex2;