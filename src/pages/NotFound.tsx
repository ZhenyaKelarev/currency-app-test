import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>

      <Link className="button" to="/">
        Back to home page
      </Link>
    </div>
  )
}

export default NotFound
