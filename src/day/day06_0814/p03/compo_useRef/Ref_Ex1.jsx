import { useRef } from 'react';

const Ref_Ex1 = () => {

    // 1.  참조 객체(inputRef) 생성 => <input> DOM 요소를 가리킴
    const inputRef = useRef(null) // 초기값을 null로 설정

    // 2. input 요소에 focus() 메서드를 호출
    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <div className='comment'>
                <h2>* useRef란?</h2>
                <h4>: DOM 요소나 값에 접근할 수 있는 참조 객체를 생성</h4>
            </div>

            <h1>예제 1.</h1>
            <div className='comment'>
                <ol>
                    <li>참조 객체(inputRef) 생성 - 초기값: null</li>
                    <li>input 요소에 focus() 메서드를 호출</li>
                    == JSX 부분 ==
                    <li>입력창에 inputRef를 연결하여, ref를 통해 직접 조작</li>
                    <li>버튼 생성: 클릭하면 focusInput 함수가 실행되고, 입력창에 포커스가 이동</li>
                </ol>
            </div>

            {/* 입력창에 inputRef를 연결하여, ref를 통해 직접 조작 */}
            입력창 <input
                type="text"
                ref={inputRef}
                placeholder='입력하세요.' />

            <br /><br />

            {/* 버튼을 클릭하면 focusInput 함수가 실행되고 입력창에 포커스가 이동 */}
            <button onClick={focusInput}>포커스 주기</button>

        </>
    );
};

export default Ref_Ex1;