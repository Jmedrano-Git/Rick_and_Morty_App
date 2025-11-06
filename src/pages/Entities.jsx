import { useEffect, useState } from "react"
import rickApi from "../api/rickApi.js"

function Entities() {
    const [type, setType] = useState("character")
    const [data, setData] = useState([])

    useEffect(() => {
        rickApi.get(`/${type}`)
            .then(res => setData(res.data.results))
    }, [type])

    return (
        <>
            <h2 className="mb-4">Entities</h2>

            <select
                className="form-select mb-4"
                value={type}
                onChange={e => setType(e.target.value)}
            >
                <option value="character">Characters</option>
                <option value="location">Locations</option>
                <option value="episode">Episodes</option>
            </select>

            <div className="row g-3">
                {data.map(item => (
                    <div key={item.id} className="col-md-3">
                        <div className="card h-100 shadow">

                            {item.image && (
                                <img src={item.image} className="card-img-top" alt={item.name} />
                            )}

                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>

                                {type === "character" && (
                                    <>
                                        <p><strong>Status:</strong> {item.status}</p>
                                        <p><strong>Species:</strong> {item.species}</p>
                                        <p><strong>Gender:</strong> {item.gender}</p>
                                    </>
                                )}

                                {type === "location" && (
                                    <>
                                        <p><strong>Type:</strong> {item.type}</p>
                                        <p><strong>Dimension:</strong> {item.dimension}</p>
                                        <p><strong>Residents:</strong> {item.residents?.length}</p>
                                    </>
                                )}

                                {type === "episode" && (
                                    <>
                                        <p><strong>Episode:</strong> {item.episode}</p>
                                        <p><strong>Date:</strong> {item.air_date}</p>
                                        <p><strong>Characters:</strong> {item.characters?.length}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Entities