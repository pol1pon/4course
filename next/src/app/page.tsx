import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
            <h1>Главная</h1>
            <ul>
                <li><Link href="/blog/nextjs-vvedenie">Введение в Next.js</Link></li>
                <li><Link href="/blog/react-osnovy">Основы React</Link></li>
            </ul>
        </main>
    </div>
  );
}
