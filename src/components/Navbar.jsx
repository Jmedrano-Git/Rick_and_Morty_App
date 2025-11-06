import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Rick & Morty</Link>


      <div className="ms-auto">
        <Link className="btn btn-outline-light me-2" to="/">Home</Link>
        <Link className="btn btn-outline-light" to="/entities">Entities</Link>
      </div>
    </nav>
  )
}

export default Navbar