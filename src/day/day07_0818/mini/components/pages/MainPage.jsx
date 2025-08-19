// useNavigate: React Router library의 hook중 하나
// 페이지 이동(navigation)할 때 사용 => 특정 경로로 이동하는 기능
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import PostList from '../lists/PostList';
// ui 폴더 내 Button 파일에서 styled로 지정한 Button 스타일을 가져와서 사용
import Button from '../ui/Button';
import data from '../../data.json';

// 1. 화면 레이아웃/스타일링 상수 선언(값 재할당 불가) 
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

function MainPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>

                {/* 컴포넌트란? 화면에 보여줄 구조 및 동작 표현(함수나 클래스 형태로 JSX를 반환) */}
                {/* 2. Button 컴포넌트 */}
                {/* Styled로 지정한 Button 스타일 그대로 적용됨 */}
                <Button
                    title='글 작성하기'
                    // 사용자가 버튼을 클릭하면 '/post-write' 경로로 페이지가 이동
                    onClick={() => {
                        // navigate: 특정 경로로 이동
                        navigate('/post-write');
                    }}
                />

                {/* 3. PostList 컴포넌트*/}
                <PostList
                    // posts 속성에 data 전달(여러 개시글 리스트 표시 역할)
                    posts={data}
                    // onClickItem: 개별 게시글 클릭시 동작을 정의
                    onClickItem={(item) => {
                        // 게시글 클릭하면, 해당 게시글의 상세 페이지로 이동
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
