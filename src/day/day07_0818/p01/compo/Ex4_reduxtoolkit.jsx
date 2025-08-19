import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../js/store_redux_slice';


const Ex4_reduxtoolkit = () => {

    // 1. 상태 조회
    // useSelector: redux store의 상태(state)를 구독하여 컴포넌트에서 사용할 수 있게
    // redux store의 counter 슬라이스 내 value 값을 읽어와 count 변수에 저장.
    const count = useSelector((state) => state.counter.value)

    // 2. Dispatch 함수 가져오기: Action을 redux store에 보내 상태를 변경하도록 함
    // useDispatch: 액션을 디스패치(dispatch)할 수 있는 함수를 제공
    const dispatch = useDispatch()

    return (
        <>
            <h1>예제 4. Redux Toolkit</h1>

            <div className='comment'>
                <ol>
                    <li>상태 조회</li>
                    <ul>
                        <li>useSelector: redux store의 상태(state)를 구독하여 컴포넌트에서 사용할 수 있게</li>
                        <li>redux store의 counter_slice 내 value 값을 읽어와 count 변수에 저장</li>
                    </ul>
                    <li>Dispatch 함수 가져오기</li>
                    <ul>
                        <li>Action을 redux store에 보내 상태를 변경하도록 함</li>
                    </ul>
                </ol>
            </div>


            <p className='result'>Count: {count}</p>

            {/* 아래 액션들은 redux slice에서 정의한 action creator */}
            {/* increment 액션을 dispatch하여 상태 값 증가 */}
            <button onClick={() => dispatch(increment())}>
                +1 증가
            </button>
            {/* decrement 액션을 dispatch하여 상태값 감소 */}
            <button onClick={() => dispatch(decrement())}>
                -1 감소
            </button>
            {/* incrementByAmount(5) 액션을 dispatch하여 상태값 5 증가 */}
            <button onClick={() => dispatch(incrementByAmount(5))}>
                +5씩 증가
            </button>

            <button onClick={() => dispatch(reset())}>
                초기화
            </button>
        </>
    );
};

export default Ex4_reduxtoolkit;