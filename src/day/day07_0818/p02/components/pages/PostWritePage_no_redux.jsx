import { use, useState } from 'react';
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
    const navigate = useNavigate();

    // 2. 글작성-제목과 내용 입력값 관리를 위한 상태 선언(초기값: 빈칸)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            })

            // ok가 아니면 => 실패하면
            if (!response.ok) {
                throw new Error('글 작성에 실패했습니다.')
            }

            // 글작성 완료(성공) 시, 메인 페이지로 이동
            navigate('/')

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

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
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                {/* 4. 내용 입력창 설정 */}
                <TextInput
                    height={480}
                    // 내용 상태와 연결
                    value={content}
                    // 내용 입력값 변경 시 상태 업데이트
                    placeholder='내용을 입력하세요.'
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                {/* 5. 글 작성 완료 버튼 생성 */}
                <Button
                    title={loading ? '글 작성 중...' : '글 작성 완료'}
                    // 클릭 시, 메인 페이지로 이동
                    onClick={handleSubmit}
                    disabled = {loading}
                />

                {error && <ErrorText>{error}</ErrorText>}
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
