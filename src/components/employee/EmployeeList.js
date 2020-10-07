import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
   // This state changes when `getAnimals()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getEmployees()
    }, [])


    return (	
		<div className="employees">
        {
			employees.map(employee => {
				return <EmployeeCard key={employee.id} employee={employee} />
			})
        }
        </div>
    )
}