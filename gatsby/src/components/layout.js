import React from 'react';
import { Link } from 'gatsby';

export function Layout({ children }) {
  return (
    <>
      <header>
        <Link to="/">Gatsby Jamstack Site</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      {children}
      <footer>
        <a href="https://github.com/jlengstorf/smashing-jamstack">
          see the source code
        </a>
      </footer>
    </>
  );
}
