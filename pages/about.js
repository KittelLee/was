import React from "react";
import styles from "../styles/Home.module.css";

export default function about() {
  const name = "John";
  return (
    <div className={styles.subsite}>
      <h1>About page</h1>
      <p>File-based routing</p>
      <p>JSX</p>
      <p>Hello {name}</p>
    </div>
  );
}
