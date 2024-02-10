import Link from "next/link";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <h1 className={styles.header}>about</h1>
      <p>I&apos;m Amir Hossein Qorbani</p>
      <Link href="/">Main page</Link>
      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
    </>
  );
}
