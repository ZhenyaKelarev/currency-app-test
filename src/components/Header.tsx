import { Link } from "react-router-dom"
import "@/styles.css"

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <Link to="/" className="header__link">
        Головна
      </Link>
      <Link to="/edited" className="header__link">
        Змінені курси
      </Link>
      <Link to="/search" className="header__link">
        Пошук курсу
      </Link>
    </nav>
  </header>
)

export default Header
