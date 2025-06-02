import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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

const Details = () => {
    const { id } = useParams();
    const [films, setFilms] = useState(initialFilms);
    const [film, setFilm] = useState({});

    const fetchFilm = (() => {
        films.forEach((actualFilm) => {
            if (actualFilm.id === parseInt(id)) {
                setFilm(actualFilm);
            }
        })
    })

    useEffect(() => {
        fetchFilm();
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
                    <img className='img-fluid' src={film.image} alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <h2>{film.title}</h2>
                    <h3><em>{film.author}</em></h3>
                    <p>{film.abstract}</p>
                </div>
            </div>
        </div>
    )
}

export default Details