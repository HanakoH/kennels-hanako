import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { useHistory } from "react-router-dom"


export const LocationForm = () => {
    const { getLocations, addLocation } = useContext(LocationContext)
    
    const history = useHistory()

    const name = useRef(null)
    const address = useRef(null)

    useEffect(() => {
        getLocations()
     }, [])

     const constructNewLocation = () => {
        addLocation({
            name: name.current.value,
            address: address.current.value
            
        })
        .then(() => history.push("/locations"))
    }

    return (
        <form className="LocationForm">
            <h2 className="LocationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="LocationName">Location name: </label>
                    <input type="text" id="LocationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="LocationAddress">Location address: </label>
                    <input type="text" id="LocationAddress" ref={address} required className="form-control" placeholder="Location address" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewLocation()
                }}
                className="btn btn-primary">
                Save Address
            </button>
        </form>
    )
}