import React from 'react';
import './layout.css';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Upcoming Publications</h1>
      </header>
      <main>{children}</main>
    </>
  );
}
