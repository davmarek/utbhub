import { Link } from 'react-router-dom'
import '../styles/App.scss'

function Home(props: any) {
  return (
    <div>
      <h1>UTB Hub</h1>
      <Link to="/menu/u5">Jídelníček U5</Link> <br />
      <Link to="/menu/u4">Jídelníček U4</Link>
    </div>
  )
}

export default Home
