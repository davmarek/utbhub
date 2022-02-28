import { Link } from 'react-router-dom';
import '../styles/Home.scss';

function Home(props: any) {
  return (
    <div>
      <h1>UTB Hub</h1>
      <nav>
        <Link className="u5" to="/menu/u5">
          Jídelníček U5
        </Link>
        <Link className="u4" to="/menu/u4">
          Jídelníček U4
        </Link>
      </nav>
    </div>
  );
}

export default Home;
