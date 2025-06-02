import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FilmCard from '../../components/FilmCard';

const initialFilms = [
    {
        id: 1,
        title: "Titolo 1",
        author: "Regista 1",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 2,
        title: "Titolo 2",
        author: "Regista 2",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 3,
        title: "Titolo 3",
        author: "Regista 3",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 4,
        title: "Titolo 4",
        author: "Regista 4",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 5,
        title: "Titolo 5",
        author: "Regista 5",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 6,
        title: "Titolo 6",
        author: "Regista 6",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300"
    }

];

const Homepage = () => {
    const [films, setFilms] = useState(initialFilms);

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