import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from '../../components/ReviewForm';



const Details = () => {
    const { id } = useParams();
    const [film, setFilm] = useState({});

    const getFilms = () => {
        axios.get(`http://127.0.0.1:3000/api/movie/${id}`).then((resp) => {
            setFilm(resp.data);
        })
    }

    useEffect(() => {
        getFilms();
    }, [])



    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4" key={`actualFilm${film.id}`}>
                    <img className='img-fluid' src={`/public/imgs/movies_cover/${film.image}`} alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <h2>{film.title}</h2>
                    <h3><em>{film.director}</em></h3>
                    <p>{film.abstract}</p>
                </div>
            </div>
            <div className="row gy-4 mt-4">
                {film.reviews?.map((review) => {
                    return <div key={`review ${review.id}`} className="col-12">
                        <div className="card p-4">
                            <p>{review.name}</p>
                            <p>{review.vote}</p>
                            <p>{review.text}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <ReviewForm filmId={id} reloadReview={getFilms} />
                </div>
            </div>
        </div>
    )
}

export default Details