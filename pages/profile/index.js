import React from "react";
import Image from "next/image";
import styles from "../../styles/profile.module.css";

export default function profile() {
  return (
    <div className={styles.body}>
      <div className={styles.profile_card}>
        <div className={styles.card_header}>
          <div className={styles.pic}>
            <Image src="/pic.png" width={200} height={200} />
          </div>
          <div className={styles.name}>이진욱</div>
          <div className={styles.desc}>중부대학교 정보보호학과</div>
          <div className={styles.desc}>leejin7900@gmail.com</div>
          <div className={styles.desc}>[WEB]Front-End</div>
          <a
            href="https://projectlog.tistory.com/"
            className={styles.contact_btn}
          >
            블로그 바로가기
          </a>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.numbers}>
            <div className={styles.item}>
              <span>3</span>
              학년
            </div>
            <div className={styles.border}></div>
            <div className={styles.item}>
              <span>18</span>
              학번
            </div>
            <div className={styles.border}></div>
            <div className={styles.item}>
              <span>WEB</span>
              분야
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
