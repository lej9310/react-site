import React, { createContext, useContext, useState } from 'react';

// 1. Context 생성
// createContext()로 생성한 GlabelContext의 값(count, setCount)을 상태로 관리
const GlabelContext = createContext();

// 2. Provider 생성
const Ex_count_provider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <>
        {/* GlabelContext.Provider를 사용해 자식 컴포넌트들이 이 상태에 접근할 수 있도록 */}
            <GlabelContext.Provider value={{ count, setCount }}>
                {children}
            </GlabelContext.Provider>
        </>
    );
};

export default Ex_count_provider;

// 3. 커스텀 훅으로 설정
export const useGlabel = () => useContext(GlabelContext)

