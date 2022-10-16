import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function about() {
  const name = "Jinuk";
  return (
    <div className={styles.subsite}>
      <h1>About</h1>
      <ul>
        <li>Hello world!</li>
        <li>nextjs예제사이트 was사이트 입니다.</li>
        <li>위사이트의 저작권은 {name}에게 있습니다.</li>
      </ul>
      <h2>사용되는 언어 및 프레임워크</h2>
      <ul>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Tailwind css</li>
        <li>File-based routing</li>
        <li>JSX</li>
      </ul>

      <div className={styles.containerr}>
        <Image src="/notebook.jpeg" width={784} height={500}></Image>
        <div className={styles.content}>
          <h1>Next.js</h1>
          <p>
            Next.js는 서버 사이트 렌더링, 정적 웹 페이지 생성 등 리액트 기반 웹
            애플리케이션 기능들을 가능케 하는 Node.js 위에서 빌드된 오픈 소스 웹
            개발 프레임워크이다. 리액트 문서는 Next.js를 &quot;권고하는
            툴체인들&quot; 중 하나로 언급하며 개발자들이 Node.js로 서버
            렌더링되는 웹사이트를 빌드할 때의 해결책의 하나로 충고하고 있다.
          </p>
        </div>
      </div>
    </div>
  );
}
