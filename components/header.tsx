import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 text-center">
      <nav className="flex justify-center gap-4">
        <ul className="flex list-none">
          <li className="ml-8">
            <Link href="/home" className="text-white font-bold no-underline hover:underline">Home</Link>
          </li>
          <li className="ml-8">
            <Link href="/about" className="text-white font-bold no-underline hover:underline">About</Link>
          </li>
          <li className="ml-8">
            <Link href="/contact" className="text-white font-bold no-underline hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
