import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/detail/${animal.id}`}>
                { animal.name }
            </Link>
        </h3>
        <p className="animal__breed">{animal.breed}</p>
        <address className="location__address">{animal.location.name}</address>
    </section>
)