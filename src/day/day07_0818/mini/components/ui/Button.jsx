// styled-components library: React 컴포넌트에 CSS 스타일을 직접 작성하고 적용할 수 있게 도와
import styled from 'styled-components';

// HTML 태그 또는 다른 React 컴포넌트를 감싸서, 스타일이 적용된 새로운 컴포넌트를 생성
// button에 css를 템플릿 리터럴 형태로 작성
// 생성된 button 컴포넌트는 일반 <button>처럼 사용, 지정된 스타일 자동 적용됨
// 동적 스타일 적용 가능: props를 받아 스타일을 조건부로 변경할 수 있음
// 예시:
// const StyledButton = styled.button` 
//    background-color:${props.primary ? 'blue': 'grey'}
// `
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;        
    cursor: pointer; // 마우스가 버튼 위에 있을 때 포인터 모양으로 변경
`;

function Button(props) {

    // props로부터 title과 onClick를 분리해서 받음
    const { title, onClick } = props;

    // StyledButton 컴포넌트를 렌더링
    return <StyledButton onClick={onClick}>
        {/* 버튼 안에 보여질 텍스트는 title이 있으면 그 값을, 없으면 기본으로 'button'을 표시 */}
        {title || 'button'}
    </StyledButton>;
}

export default Button;
