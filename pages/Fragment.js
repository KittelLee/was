import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Fragment() {
  return (
    <div className={styles.subsite}>
      <p>Fragments 테스트</p>
      <p>Hello world!</p>
      <Image src="/frag.png" width={1000} height={354} />
      <a href="https://projectlog.tistory.com/14" className={styles.blog}>
        [나의 블로그 글보기]
      </a>
    </div>
  );
}
