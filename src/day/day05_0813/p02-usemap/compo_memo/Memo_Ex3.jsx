import React, { useMemo, useState } from 'react';

const users = [
    { id: 1, name: "kim", active: true },
    { id: 2, name: "Lee", active: false },
    { id: 3, name: "Park", active: true }
]

const Memo_Ex3 = () => {

    // 상태변수 설정
    const [showActive, setShowActive] = useState(true)

    // useMemo(): 기억 캐싱
    // () => {}: 값이나 결과를 반환하는 콜백 함수
    const filteredUser = useMemo(() => {
        console.log(" 사용자 필터링 실행")
        // users.filter()는 showActive 값을 기준으로 user를 필터링
        return users.filter((user) => user.active === showActive)
    // 의존성 배열 [showActive]를 통해 변화가 있을 때만 계산을 트리거
    }, [showActive])

    return (
        <>
            <h1>예제 3.</h1>
            <h2>useMemo에서 .filter를 사용하여 user(배열)에서 showActive를 기준으로 필터링</h2>

            <p style={{ color: 'blue' }}>{"*useMemo(): 연산 캐싱하여, 값이 동일할 경우 이전에 계산한 결과를 재사용(이전 필터링 결과 그대로 반환) => 불필요한 계산을 방지"}</p>
            <p style={{ color: 'blue' }}>{"const memoizedValue = useMemo(() => {"}</p>
            <p style={{ color: 'blue' }}>{"return 계산된_값;"}</p>
            <p style={{ color: 'blue' }}>{"}, [의존성_배열])"}</p>

            <button
                style={{ color: 'white', background: 'green' }}
                onClick={() => setShowActive((a) => !a)}>
                {showActive ? "비활성" : "활성"} / 사용자 보기 클릭
            </button>

            <ul>
                {/* .map 메서드:  
                key: <li>를 렌더링할 때 각 <li>에 고유 키를 지정하여 요소 식별
                */}
                {filteredUser.map(
                    (u) => (
                        <li key={u.id}>{u.name} 고객님</li>
                    )
                )}
            </ul>
        </>
    );
};

export default Memo_Ex3;