import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeCard } from "./employee/Employee";
import { LocationCard } from "./location/Location";
import { CustomerCard } from "./customer/Customer";

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider> 

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employees">
                <EmployeeCard />
            </Route>

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the custom list when http://localhost:3000/customers */}
            <Route path="/customers">
                <CustomerCard />
            </Route>
        </>
    )
}