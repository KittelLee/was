import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Fragment() {
  return (
    <div className={styles.subsite}>
      <p>Fragments 테스트</p>
      <p>Hello world!</p>
      <Image src="/black.gif" width={480} height={270} />
      <br />
      <a href="https://projectlog.tistory.com/14" className={styles.blog}>
        [나의 블로그 글보기]
      </a>
      <br />
      <br />
      <br />
      <br />
      <Image src="/frag.png" width={1000} height={354} />
    </div>
  );
}
