import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

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

function PostWritePage(props) {

    // 1. 페이지 이동 함수(useNavigate)
    const navigate = useNavigate()

    // 2. 글작성-제목과 내용 입력값 관리를 위한 상태 선언(초기값: 빈칸)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <Wrapper>
            <Container>
                {/* 3. 제목 입력창 설정 */}
                <TextInput
                    height={20}
                    // 제목 상태와 연결
                    value={title}
                    placeholder='제목을 입력하세요.'
                    // 제목 입력값 변경 시 상태 업데이트
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                {/* 4. 내용 입력창 설정 */}
                <TextInput
                    height={480}
                    // 내용 상태와 연결
                    value={content}
                    // 내용 입력값 변경 시 상태 업데이트
                    placeholder='내용을 입력하세요.'
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />

                {/* 5. 글 작성 완료 버튼 생성 */}
                <Button
                    title='게시글 작성 완료'
                    // 클릭 시, 메인 페이지로 이동
                    onClick={() => {
                        navigate('/react-site/project_List/D07P2')
                    }}
                />

            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
