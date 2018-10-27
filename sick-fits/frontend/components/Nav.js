import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <Link href="/sell">
        <a>Click 🛍 to go to sell!</a>
      </Link>
      <Link href="/">
        <a>Click 🏠 to go home!</a>
      </Link>
    </div>
  );
};

export default Nav;
