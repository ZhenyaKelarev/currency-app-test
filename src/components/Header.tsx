import { Link } from "react-router-dom"

const Header = () => (
  <header>
    <nav>
      <Link to="/">Головна</Link>
      <Link to="/edited">Змінені курси</Link>
      <Link to="/search">Пошук курсу</Link>
    </nav>
  </header>
)

export default Header
