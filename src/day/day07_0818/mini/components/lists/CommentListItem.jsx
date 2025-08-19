import styled from 'styled-components';

// <div> 태그를 스타일드 컴포넌트
const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

// <p> 태그를 스타일드 컴포넌트 생성
const ContentText = styled.p`
    font-size: 16px;
    // 공백과 줄바꿈을 유지하면서 영역에 맞체 텍스트 줄바꿈 처리(사용자가 작성한 그대로)
    white-space: pre-wrap;
`;

function CommentListItem(props) {
    // props에서 comment 객체를 받아옴
    const { comment } = props;

    return (
        // Wrapper 컴포넌트 안에 ContentText 안에 comment의 content 표시
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;
