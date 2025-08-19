import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function CommentList(props) {

    // props로부터 댓글 목록(comments 배열)을 받아옴
    const { comments } = props;

    return (
        // Wrapper 컴포넌트 안에서 반복문(map)을 사용해 comments 배열을 한 개씩 순회
        <Wrapper>
            {comments.map((comment, index) => {
                // 각 comment에 대해 CommentListItem 컴포넌트를 생성
                return (
                    <CommentListItem
                        // 각 댓글의 고유 식별자(comment.id)를 지정 => 리스트 렌더링 최적화
                        key={comment.id}
                        // comment 객체를 CommentListItem 컴포넌트에 전달
                        comment={comment}
                    />
                );
            })}
        </Wrapper>
    );
}

export default CommentList;
