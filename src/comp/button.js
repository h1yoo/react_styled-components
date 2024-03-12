// import {  } from "module";
import React from "react";
import classNames from "classnames";
import "./button.scss";  // scss 컴포넌트 파일을 불러온다.

// const Button = ({ children, onClick }) => {};
const Button = ({children, size, color}) => {
  // return <button className={`Button, ${size}`}>{children}</button>; // 아래처럼 join을 사용해도 됨
  // return <button classNames={["Button", size].join('')}>{children}</button>;
  // ["Button", size].join(' '): className의 CSS 클래스 이름을 동적으로 설정
  // ["Button", size].join(' ')은 "Button small" 또는 "Button large"로 변환된다. ==> 클래스가 Button과 small혹은 large 두 개가 됨
  // 이렇게 만들어진 문자열이 className으로 사용된다.

  return <button className={classNames("Button", size, color)}>{children}</button>;
};

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;