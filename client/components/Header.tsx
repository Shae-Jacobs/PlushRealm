import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header>
        <h1>Plush Realm </h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
}
