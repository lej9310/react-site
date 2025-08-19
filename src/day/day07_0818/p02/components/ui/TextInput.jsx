import styled from 'styled-components';

const StyledTextarea = styled.textarea`
// 텍스트 영역의 너비를 부모 요소 너비에서 32px을 뺀 크기로 설정
    width: calc(100% - 32px);
    
    // props로 전달된 height 값을 높이(height)로 적용.  없으면 기본 높이가 설정 안 됨.
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props) {
    
    // 전달받은 height, value, onChange 속성을 분리해서 받아옴
    const { height, value, onChange, placeholder } = props;

    return (
        // StyledTextarea 컴포넌트를 렌더링
        <StyledTextarea
            height={height}
            value={value}
            // 텍스트 영역에 입력할 때마다 호출되는 이벤트 핸들러
            onChange={onChange}
            // PoseWritePage에 placeholder 전달할 수 있도록 추가함
            placeholder={placeholder}
        />
    );
}

export default TextInput;
