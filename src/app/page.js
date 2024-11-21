import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log("I am root page")
  return (
    <div className={styles.page}>
      <main>
        <h2>Hello Next 15</h2>
      </main>
    </div>
  );
}
