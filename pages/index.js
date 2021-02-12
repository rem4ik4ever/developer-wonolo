import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import classNames from 'classnames';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Developer | Wonolo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The Staffing infrastructure for your business"
        />
        <meta name="copyright" content="wonolo, inc" />
        <meta name="url" content="https://developer.wonolo.com" />
        <meta name="og:title" content="Wonolo Developer Center" />
        <meta name="og:type" content="Website" />
        <meta name="og:url" content="https://developer.wonolo.com" />
        <meta name="og:site_name" content="Wonolo" />
        <meta
          name="og:description"
          content="The Staffing infrastructure for your business"
        />
      </Head>
      <header className="w-full flex justify-start p-8">
        <Image
          src="/wonolo-logo-original.svg"
          height={23}
          width={100}
          alt="Wonolo Tech"
          priority
        />
        <span className="inline ml-2 text-2xl">Developer Center</span>
        <span />
      </header>
      <main>
        <div
          className={classNames(
            styles.patternbottom,
            'w-full',
            'sm:w-1/4',
            'h-1/4',
            'sm:h-3/5'
          )}
        />
        <div
          className={classNames(
            styles.patterntop,
            'hidden',
            'md:block',
            'sm:w-1/4',
            'h-3/5'
          )}
        />
        <section role="hero" className={styles.container}>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center">
            <span className="block xl:inline">
              The Staffing infrastructure for
            </span>{' '}
            <span className="block xl:inline text-yellow-400">
              your business
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-3xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center">
            Thousands of companies use Wonolo's software and APIs to schedule,
            manage and pay their on-demand workforce
          </p>
          <div class="rounded-md shadow mt-16">
            <a
              href="mailto:requestapiaccess+noreply@wonolo.com"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
            >
              Request Access
            </a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <a href="https://wonolo.com" target="_blank" rel="noopener noreferrer">
          © Wonolo, Inc
        </a>
      </footer>
    </div>
  );
}
