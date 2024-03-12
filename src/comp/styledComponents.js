// styled-components 라이브러리를 사용하여 컴포넌트를 스타일링하는 방법
// Tagged 템플릿 리터럴을 사용하여 스타일을 적용한다.
//  - 템플릿 안에 자바스크립트 객체나 함수를 전달하여 스타일을 동적으로 설정할 수 있다.
// (템플릿 리터럴: 문자열을 사용하여 문자열을 만들 수 있는 기능, 문자열을 만들 때 편리하게 사용할 수 있다.)
// 설치하기: npm install styled-components / yarn add styled-components
// VSCode Extension: vscode-styled-components

import React from 'react';
import styled, { css } from 'styled-components';
import Box from './box';

// Tagged 템플릿 리터럴을 사용하여 스타일을 적용한다.
const BoxStyled = styled.div`
  /* props로 넣어 준 값을 직접 전달할 수 있다. */
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;

  /* 기본적으로는 1024px에 가운데 정렬을 하고 가로 크기는 1024px을 넘기지 않음 */
  width: 1024px;
  margin: 0 auto;
  // 미디어 쿼리를 이용해 반응형 디자인 적용
  /* 만약 1024px보다 작아진다면 */
  @media (max-width: 1024px) {
    width: 768px;
  }
  /* 만약 768px보다 작아진다면 */
  @media (max-width: 768px) {
    width: 768px;
  }

`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* &문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {   // button:hover와 같은 의미
    background: rgba(255, 255, 255, 0.9);
  }

  /*다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다.*/
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

// 사용할 컴포넌트 제작
const StyledComponents = () => {
  return (
    <BoxStyled color='black'>
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </BoxStyled>
    // Box 컴포넌트 ?? box.js 파일 변경해야 하는 건가?? 놓침 ㅠ
    // 위에 const BoxStyled = styled.div`...` 정의해주면 이렇게 사용할 수 있나봄
  );
};

export default StyledComponents;