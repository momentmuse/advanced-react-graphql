import Link from 'next/link';

const Sell = props => {
  return (
    <div>
      <p>🛍 Sell!!</p>
      <Link href="/">
        <a>Click 🏠 to go home!</a>
      </Link>
    </div>
  );
};

export default Sell;
