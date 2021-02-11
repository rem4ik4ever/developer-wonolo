import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Developer | Wonolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
        <span style={{backgroundColor: '#FFDC00'}} className="p-4 rounded-md">
        <h1 className="text-6xl text-black">
          <a href="https://developer.wonolo.com">Developer Wonolo</a>
        </h1>
      </span>
      </main>
      <footer className={styles.footer}>
        <a
        href="https://wonolo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wonolo
        </a>
      </footer>
    </div>
  )
}
