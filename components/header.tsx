import Link from 'next/link';
import style from '../styles/header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav} >
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
