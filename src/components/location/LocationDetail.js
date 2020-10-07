import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { getLocationById, removeLocation } = useContext(LocationContext)
	
	const [location, setLocation] = useState({})
	const [animals, setAnimals] = useState([])
	const [employees, setEmployees] = useState([])
	
	const {locationId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getLocationById(locationId)
        .then((response) => {
            setLocation(response)
			setAnimals(response.animals)
			setEmployees(response.employees)
		})
			}, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__employee">Employees: 
            <p>
                {
                    employees.map(employee => {
                        return employee.name
                    }).join(", ")
                }
            </p>
            </div>
			<div className="location__animal">Current Residents: 
            <p>
                {
                    animals.map(animal => {
                        return animal.name
                    }).join(", ")
                }
            </p>
            </div>
			<button onClick={
				() => {
					removeLocation(location.id)
						.then(() => {
							history.push("/locations")
						})
				}}>Remove Location
			</button>
            
        </section>
    )
}