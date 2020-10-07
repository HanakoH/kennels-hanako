import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
    const { getEmployeeById, removeEmployee } = useContext(EmployeeContext)
	
	const [employee, setEmployee] = useState({})
	const [location, setLocation] = useState({})
	
	const {employeeId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getEmployeeById(employeeId)
        .then((response) => {
			setEmployee(response)
			setLocation(response.location)
		})
			}, [])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
			<div className="employee__location">Location: {location.name}</div>
			<button onClick={
				() => {
					removeEmployee(employee.id)
						.then(() => {
							history.push("/employees")
						})
				}}>Remove Employee
			</button>
            
        </section>
    )
}