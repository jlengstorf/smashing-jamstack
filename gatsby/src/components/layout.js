import React from 'react';
import { Link } from 'gatsby';

import '../styles/global.css';

export function Layout({ children }) {
  return (
    <>
      <header>
        <Link to="/">Smashing Jamstack Site</Link>
        <nav>
          <Link to="/">Movies</Link>
          <Link to="/characters/">Characters</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <a href="https://github.com/jlengstorf/smashing-jamstack">
          see the source code
        </a>
      </footer>
    </>
  );
}
