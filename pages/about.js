import { Fragment } from "react";
import Hero from "../components/about/Hero";
import styles from "../styles/Home.module.css";

export default function AboutPage() {
  return (
    // <div className={styles.container}>
    <div className={styles.main}>
      <p className={styles.title}>about the website and author(s)</p>
      <Hero />
    </div>
    // </div>
  );
}
