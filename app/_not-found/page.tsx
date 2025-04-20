// app/not-found/page.tsx
import Link from 'next/link';
import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Page Not Found</p>
      <Link href="/" style={{ fontSize: '1rem', textDecoration: 'none', color: 'blue' }}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;