import React, { useMemo, useState } from 'react';

const users = [
    { id: 1, name: 'kim', age: 25, sex: 'female', active: true },
    { id: 2, name: 'Lee', age: 46, sex: 'male', active: false },
    { id: 3, name: 'park', age: 72, sex: 'male', active: true }
]

const Memo_Ex3 = () => {

    const [showActive, setShowActive] = useState(true)

    const filteredUser = useMemo(() => {
        console.log('사용자 필터링 실행')

        return users.filter(user => user.active === showActive)
    }, [showActive])

    return (
        <>
            <h1>예제 3. </h1>

            <button
                onClick={() => setShowActive(a => !a)}>
                클릭 시, {showActive ? "비활성" : "활성"} 사용자 확인
            </button>

            <ul>
                {filteredUser.map(
                    u => (
                        <li key={u.id}>
                            이름: {u.name},
                            나이: {u.age},
                            성별: {u.sex}
                        </li>
                    )
                )}
            </ul>
        </>
    );
};

export default Memo_Ex3;