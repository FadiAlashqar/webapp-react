import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FilmCard from '../../components/FilmCard';
import axios from 'axios';
import { useEffect } from 'react';

const Homepage = () => {
    const [films, setFilms] = useState([]);

    const getFilms = () => {
        axios.get("http://127.0.0.1:3000/api/movie").then((resp) => {
            setFilms(resp.data);
        })
    }

    useEffect(() => {
        getFilms();
    }, [])

    console.log(films)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Films</h1>
                </div>
            </div>
            <div className="row gy-4">
                {films.map((film) => {
                    return <FilmCard film={film} key={`book ${film.id}`} />
                })}
            </div>
        </div>
    )
}

export default Homepage