import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
// 설치 먼저: Redux toolkit
// npm install @reduxjs/toolkit react-redux
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import { addPost } from './실제 경로'

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
    const dispatch = useDispatch()

    // 2. 글작성-제목과 내용 입력값 관리를 위한 상태 선언(초기값: 빈칸)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // * 새글 작성하기 위한 Redux 사용, Slice 정의    
    const postsSlice = createSlice({
        name: 'posts',
        // 게시글 목록
        initialState: { item: [] },
        reducers: {
            addPost: (state, action) => {
                // 새 게시글을 배열 끝에 추가
                state.items.push(action.payload)
            },
            // 콤마 빠드리지 않기
        },
    })

    const handleSubmit = () => {
        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 모두 입력해 주세요.')
            return
        }
    }

    // 새 게시글 객체 생성
    const newPost = {
        id:Date.now(),
        title,
        content,        
        Comments: [],  // 초기값 설정
    }

    // Redux 액션 디스패치로 상태에 새 게시글 추가
    dispatch(addPost(newPost))

    // 글 작성 완료 후 메인 페이지로 이동
    navigate('/')

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
                    title={'글 작성 완료'}
                    // 클릭 시, 메인 페이지로 이동
                    onClick={handleSubmit}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
export const { addPost } = postsSlice.actions
export default postsSlice.reducers
