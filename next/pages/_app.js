import React from 'react';
import Link from 'next/link';

import '../styles/global.css';

export default function Layout({ Component, pageProps }) {
  return (
    <>
      <header>
        <Link href="/">Smashing Jamstack</Link>
        <nav>
          <Link href="/">Movies</Link>
          <Link href="/characters">Characters</Link>
        </nav>
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <a href="https://github.com/jlengstorf/smashing-jamstack">
          see the source code
        </a>
      </footer>
    </>
  );
}
