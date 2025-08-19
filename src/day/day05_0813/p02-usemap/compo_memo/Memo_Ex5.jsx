import React, { useMemo, useState } from 'react';

const Memo_Ex5 = () => {
    // 1. 상태정의 함수
    const [price, setPrice] = useState(1000)
    const [quantity, setQuantity] = useState(1)
    const [discount, setDiscount] = useState(0.1)


    // 2. useMemo를 이용한 총액(total) 계산 최적화
    const total = useMemo(() => {
        console.log("총액 계산")

        return (
            price * quantity * (1 - discount)
        )
        // 의존성 배열
    }, [price, quantity, discount])

    return (
        <>
            <h1>예제 5.</h1>

            <label>가격: {""}
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(+ e.target.value)}
                />
            </label>
            <br />
            <label>수량: {""}
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(+ e.target.value)}
                />
            </label>
            <br />
            <label>할인율: {""}
                <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(+ e.target.value)}
                />
            </label>

            <p style={{ background:"darkred", color: 'white', fontWeight: 'bold' }}>
                {/* .toLocaleString 메서드를 사용해 숫자를 지역화 형식으로 변환 */}
                총액: {total.toLocaleString()}원
            </p>


        </>
    );
};

export default Memo_Ex5;