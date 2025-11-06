import { useEffect, useState } from "react"
import rickApi from "../api/rickApi.js"

function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    rickApi.get("/character")
      .then(res => setCharacters(res.data.results.slice(0, 6)))
  }, [])

  return (
    <>
      <div className="p-5 mb-4 bg-dark text-white rounded-3">
        <h1 className="display-5 fw-bold">Rick & Morty Universe</h1>
        <p className="fs-4">Salchi App con React + Vite que consume la API pública de Rick and Morty.</p>
      </div>

      <h3>Personajes destacados</h3>

      <div className="row g-3">
        {characters.map(c => (
          <div key={c.id} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={c.image} className="card-img-top" alt={c.name} />
              <div className="card-body">
                <h5>{c.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
