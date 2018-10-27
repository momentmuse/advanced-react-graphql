import Link from 'next/link';

const Home = props => {
  return (
    <div>
      <p>😛 Hey!!</p>
      <Link href="/sell">
        <a>Click 🛍 to go to sell!</a>
      </Link>
    </div>
  );
};

export default Home;
