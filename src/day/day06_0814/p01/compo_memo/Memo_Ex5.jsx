import React, { useState } from 'react';
import { useMemo } from 'react';

const Memo_Ex5 = () => {

    const [price, setPrice] = useState(1000)
    const [quantity, setQuantity] = useState(1)
    const [discount, setDiscount] = useState(0.1)

    const total = useMemo(() => {
        console.log('총액 계산')

        return price * quantity * (1 - discount)
    }, [price, quantity, discount])


    return (
        <>
            <label>
                가격: <input
                    type="number"
                    value={price}
                    onChange={e => setPrice(+ e.target.value)} />
            </label><br />

            <label>
                가격: <input
                    type="number"
                    value={quantity}
                    onChange={e => setQuantity(+ e.target.value)} />
            </label><br />

            <label>
                가격: <input
                    type="number"
                    value={discount}
                    onChange={e => setDiscount(+ e.target.value)} />
            </label><br />

            <p >총액: {total.toLocaleString()}원</p>
        </>
    );
};

export default Memo_Ex5;