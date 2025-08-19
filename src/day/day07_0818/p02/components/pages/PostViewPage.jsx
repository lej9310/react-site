import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import CommentList from '../lists/CommentList';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import data from '../../data.json';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostViewPage(props) {
    // 1. useNavigate / useParams 사용    
    const navigate = useNavigate(); // 페이지 이동을 위한 함수    
    const { postId } = useParams(); // URL 경로에서 postId 파라미터 추출 

    // 2. 게시글 데이터 검색
    // data 배열에서 postId와 일치하는 게시글 객체를 찾아 post 변수에 저장
    const post = data.find((item) => {
        return item.id == postId;
    });

    // 3. 댓글 입력 상태 관리
    // useState를 사용해 댓글 입력창에 사용자가 입력한 값 관리
    const [comment, setComment] = useState('');

    return (
        <Wrapper>
            <Container>

                {/* 4. 뒤로 가기 버튼 클릭하면 메인 페이지('/')로 이동 */}
                <Button
                    title='뒤로 가기'
                    onClick={() => {
                        navigate('/react-site/project_List/D07P2');
                    }}
                />

                {/* 5. 게시글 내용 표시 */}
                <PostContainer>
                    {/* 게시글 제목 */}
                    <TitleText>{post.title}</TitleText>
                    {/* 게시글 내용 */}
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                {/* 6. 댓글 섹션 */}
                <CommentLabel>댓글</CommentLabel>
                {/* 댓글 목록 */}
                <CommentList comments={post.comments} />

                {/* 댓글 입력창 */}
                <TextInput
                    height={40}    
                    // 입력값 상태 연결                
                    value={comment}
                    // 입력값 변경 시 상태 업데이트
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />

                {/* 댓글 작성하기 버튼 클릭하면 메인 페이지('/')로 이동 */}
                <Button
                    title='댓글 작성 완료'
                    onClick={() => {
                        navigate('/react-site/project_List/D07P2');
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
