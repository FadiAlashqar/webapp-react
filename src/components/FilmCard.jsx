import React from 'react'
import { NavLink } from 'react-router-dom'

const FilmCard = ({ film }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-image-top">
                    <img className='img-fluid' src={film.image} alt="" />
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <h3>{film.title}</h3>
                        <h4><em>{film.author}</em></h4>
                        <p>{film.abstract}</p>
                        <NavLink to={`/${film.id}`}> <button type="button" className="btn btn-primary">Read More</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmCard