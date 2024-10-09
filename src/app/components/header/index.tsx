import Link from "next/link";
import styles from "./style.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <Link href={"/"}>
            <h1 className={styles.title}>
              Tarefas<span className={styles.logo}>+</span>
            </h1>
          </Link>
          <Link href={"/dashboard"} className={styles.link}>
            Meu Painel
          </Link>
        </nav>
        <div>
          <button className={styles.accessButton}>Acessar</button>
        </div>
      </div>
    </header>
  );
}
