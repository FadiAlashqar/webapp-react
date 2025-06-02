import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>Page not Found</p>
                    <NavLink to={"/"}> <button type="button" className="btn btn-primary">Go Back to Homepage</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage