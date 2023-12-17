import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Redirect = () => {

    let { id } = useParams();
    const [error, setError] = useState(null); // State to store the error message

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/${id}`)
            .then(res => {
                window.location.href = res.data.url; // Redirect to the original URL
            })
            .catch(err => {
                setError('Something went wrong. Please try again later.'); // Set the error message
            })
    }
    );

    if (error) {
        return <div>Error: {error}</div>; // If there's an error, display it
    }

    return (
        <div>Redirecting</div>
    )
}

export default Redirect