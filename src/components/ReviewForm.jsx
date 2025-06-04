import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ filmId, reloadReview }) => {

    const initialData = { name: "", vote: "", text: "" };

    const [formData, setFormData] = useState(initialData);

    const handledata = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:3000/api/movie/${filmId}/review`, formData, {
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            setFormData(initialData);
            reloadReview();
        })
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>Reviews</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="form p-4">
                    <label className="form-label">Name</label>
                    <input value={formData.name} onChange={handledata} type="text" className="form-control" name="name" placeholder="Name">
                    </input>
                    <label className="form-label">Vote</label>
                    <input value={formData.vote} onChange={handledata} type="number" className="form-control" name="vote" placeholder="Vote">
                    </input>
                    <label className="form-label">Enter your review</label>
                    <textarea value={formData.text} onChange={handledata} className="form-control" name='text'>

                    </textarea>
                    <button type="submit" className="btn btn-primary mt-3">Salva recensione</button>
                </form>
            </div>
        </div >
    )
}

export default ReviewForm