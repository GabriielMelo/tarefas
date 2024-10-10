import Image from "next/image";
import logo from "../../public/images/logo.png";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.logoContent}>
        <Image
          src={logo}
          alt="logo"
          priority={true}
          quality={100}
          className={styles.logo}
        />
        <h1 className={styles.title}>
          Sistema feito para voce organizar <br />
          seus estudos e tarefas
        </h1>
        <div className={styles.tagContent}>
          <p className={styles.tag}>0 Posts</p>
          <p className={styles.tag}>0 Comments</p>
        </div>
      </section>
    </main>
  );
}
