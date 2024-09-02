import { Link } from 'react-router-dom'
import '../styles/index.scss'
export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <h1>Plush Realm</h1>
      </header>
      <nav className="nav">
        <Link to="/" className="home-button">
          Home
        </Link>
      </nav>
    </div>
  )
}
