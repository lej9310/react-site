import React, { useEffect, useState } from 'react';

// rsc
const ExUseEffect04 = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        // fetch API: 웹에서 파일을 가져와서 내용을 표시해라
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])

    return (
        <div>
            <h3>게시글 목록</h3>
            <hr />
            <ul>
                {
                    posts.map((p) => (
                        <li key={p.id}>
                            id : {p.id} //<br />
                            title : {p.title} //<br />
                            body : {p.body}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ExUseEffect04;