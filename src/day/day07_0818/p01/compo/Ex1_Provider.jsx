import { useGlabel } from '../Ex_count_provider';  // useGlabel 위치에 따라 경로 조정 필요

const Ex1_Provider = () => {
    // useGlabel은 context에서 {count, setCount} 객체를 반환합니다.
    const { count, setCount } = useGlabel(0);

    return (
        <>
            <h1>예제 1. Context API</h1>
            <div className='comment'>
                <ol>
                    <li>Ex_count_provider 내에서 상태 count와 상태를 변경하는 함수 setCount를 관리하며 이를 context로 하위에 제공</li>
                    <ul>
                        <li>createContext()로 생성한 GlabelContext의 값(count, setCount)을 상태로 관리</li>
                        <li>GlabelContext.Provider를 사용해 자식 컴포넌트들이 이 상태에 접근하도록</li>
                    </ul>
                </ol>
           </div>

            <p>카운트 : {count}</p>
            <button onClick={() => setCount(count + 1)}>
                +1 증가
            </button>
        </>
    );
};

export default Ex1_Provider;