import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],  // 게시글 목록
    },
    reducers: {
        addPost: (state, action) => {
            // 새 게시글을 배열 끝에 추가
            state.items.push(action.payload)
        },
        // 필요시 다른 리듀서 추가 가능
    },
});

export const { addPost } = postsSlice.actions
export default postsSlice.reducer