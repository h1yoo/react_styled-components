import React from "react";
import styles from "./box.module.css";  // css 모듈 파일을 불러온다.

const Box = ({ size }) => {
  return (
    <>
      <div className={styles.box}>
        <p>{styles.box}</p> {/*box.module.css에 있는 box 클래스를 사용한다.*/}
        <p>안녕하세요. 저는 <span className="something">CSS Module</span>입니다.</p>
      </div>
      <div className={`${styles.box} ${styles.inverted}`}> 
      {/* <div classNames={[styles.box, styles.inverted].join(' ')}>  ==> 이렇게 하면 안된다고..?!*/}
        <p>{styles.box}</p> {/*box.module.css에 있는 box 클래스를 사용한다.*/}
        <p>안녕하세요. 저는 <span className="something">CSS Module</span>입니다.</p>
      </div>
    </>
  );
};

export default Box;