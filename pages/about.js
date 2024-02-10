import Link from "next/link";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <h1 className={styles.header}>about</h1>
      <Link href="/">Main page</Link>
    </>
  );
}
