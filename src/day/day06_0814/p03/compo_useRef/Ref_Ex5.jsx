import React from 'react';
import { useRef } from 'react';

const Ref_Ex5 = () => {

    // 1. useRef 훅 사용
    // *컴포넌트의 상태와 달리 렌더링에 영향을 주지 않는 값을 저장할 때 사용
    // *useRef에 저장된 배열은 직접 변경해도 컴포넌트는 다시 렌더링 안 됨 => 아이템이 추가돼도 화면에 바로 반영 안 됨
    // => 상태 관리용으로는 보통 useState를 사용
    const itemsRef = useRef([]) //초기값으로 빈 배열 []을 지정해 itemsRef.current에 아이템들을 담는다.

    // 2. addItem 함수 생성
    const addItem = () => {
        // 배열 길이에 1을 더해 새로운 아이템 문자열을 생성 (예: "Item 1", "Item 2"...)
        const newItem = `Item ${itemsRef.current.length + 1}`
        // 기존 배열을 복사하고 새 아이템을 추가하여 itemsRef.current에 할당
        itemsRef.current = [...itemsRef.current, newItem]// 배열에 직접 추가(setState 사용 X)
        // 콘솔에서 배열 확인
        console.log(itemsRef.current)
    }

    return (
        <>
            <h1>예제 5.</h1>
            <div className='comment'>
                <ol>
                    <li>useRef 훅 사용</li>
                    <ul>
                        <li>컴포넌트의 상태와 달리 렌더링에 영향을 주지 않는 값을 저장할 때 사용</li>
                        <li>{'useRef에 저장된 배열은 직접 변경해도 컴포넌트는 다시 렌더링 안 됨 => 아이템을 추가해도 화면에 바로 반영 안 됨'}</li>
                        <li>{'상태 관리용 => useState를 사용'}</li>
                    </ul>
                    <li>addItem 함수 생성</li>
                    <ul>
                        <li>배열 길이(length)에 1을 더해 새로운 아이템 문자열을 생성 (예: "Item 1", "Item 2"...)</li>
                        <li>기존 배열을 복사하고 새 아이템을 추가하여 itemsRef.current에 할당(setState 사용 X)</li>
                        <li>콘솔에서 배열 확인</li>
                    </ul>
                    == 렌더링 부분 ==
                    <li>버튼 생성: 아이템 추가</li>
                    <li>{'itemsRef.current 배열의 각 아이템을 <li>로 출력'}</li>
                </ol>
            </div>

            {/* 3. 아이템 추가 버튼 생성 */}
            <button onClick={addItem}>아이템 추가</button>

            {/* 4. itemsRef.current 배열의 각 아이템을 <li> 요소로 출력 */}
            {/* 배열이 변경되어도 useRef는 렌더링 상태를 바꾸지 않기 때문에, 새로 추가한 아이템이 화면에 즉시 안 나타남. */}
            <ul className='result'>
                {itemsRef.current.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default Ref_Ex5;