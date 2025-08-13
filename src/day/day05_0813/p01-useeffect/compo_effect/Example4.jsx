import React, { useEffect, useState } from 'react';

const Example4 = () => {

    // 변수 및 상태 설정
    const [posts, setPosts] = useState([])

    // API 호출 및 데이터 설정
    // useEffect 훅을 사용하여 컴포넌트가 처음 렌더링될 때 API 호출
    useEffect(() => {
        // fetch 함수로 API 호출 => 
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            // then 메서드로 응답 데이터를 받아옴(res: 리소스)
            .then((res) => res.json())
            // 받아온 데이터를 setPosts 함수로 상수 posts에 저장
            .then((data) => setPosts(data))
    }, [])

    return (
        <div>
            <h1>예제 4.</h1>
            <h2>외부 API에서 데이터 가져와서 ul 리스트 형태로 화면에 렌더링하기</h2>
            <br />
            <p style={{ color: 'blue' }}>posts라는 상태를 useState를 통해 초기화</p>
            <p style={{ color: 'blue' }}>const [posts, setPosts] = useState([])</p>
            <br />
            <p style={{ color: 'blue' }}>fetch</p>
            <br />

            {/* 렌더링 부분 */}
            <ul>
                {/* posts 배열의 각 요소를 map함수로 리스트 아이템으로 변환 */}
                {posts.map((p) => (
                    <li key={p.id}>
                        타이틀:{p.title}
                    </li>
                ))
                }
            </ul>
        </div>
    );
};

export default Example4;