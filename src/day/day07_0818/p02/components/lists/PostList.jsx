import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        // Wrapper 컴포넌트 안에  post를 map 메서드를 사용해 반복 렌더링
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    // PostListItem 컴포넌트 생성
                    <PostListItem
                    // key 속성으로 리스트 렌더링 최적화
                        key={post.id}
                        // post 전체 객체를 PostListItem에 전달
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;
