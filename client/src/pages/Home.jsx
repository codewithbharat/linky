import React, { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';

const Home = () => {

    const [shortUrl, setShortUrl] = useState(''); // State to store the shortened URL
    const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

    const handleCloseModal = () => {
        setShowModal(false); // Hide the modal
    };
    const handelSubmit = (e) => {
        e.preventDefault()

        const url = e.target[0].value

        axios.post(`${import.meta.env.VITE_SERVER}/shorten`, {
            url
        })
            .then(res => {
                setShortUrl(res.data.hash); // Store the shortened URL in the state

                setShowModal(true); // Show the modal
            })
            .catch(err => {
                console.log(err)
            })

    }

    const Modal = ({ url, onClose }) => (
        <div className="flex w-full h-full justify-center items-center">
            <div className='bg-white text-black w-fit p-5 rounded-md'>
                <h2 >Shortened URL</h2>
                <p className='pb-2 font-light tracking-wider'>{url}</p>
                <button className=' text-red-400 font-semibold mr-2 border-red-400 border-2 px-1 rounded-lg hover:text-white hover:bg-red-400' onClick={onClose}>Close</button>
                <button className='text-green-400 font-semibold mr-2 border-green-400 border-2 px-1 rounded-lg hover:text-white hover:bg-green-400' onClick={() => navigator.clipboard.writeText(url)}>Copy</button>
            </div>
        </div>
    );

    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className="flex flex-col text-center m-10">
                    <h1 className='text- text-5xl font-bold leading-loose drop-shadow-sm bg-gradient-to-r from-sky-400 to-red-400 bg-clip-text text-transparent'>Shorten Your Loooong Links!!</h1>
                    <p className='text-semibold tracking-wide'>Linky is an URL shortening service that streamlines your online experience.</p>
                    <div className="flex flex-row justify-center p-4">
                        <form onSubmit={handelSubmit}>
                            <input type="text" className="rounded-l-lg p-2 border-t m-4 w-96 mr-0 border-b border-l text-md text-slate-800 border-yellow-500 bg-white " placeholder="Your Ugly Url...." />
                            <input type="submit" className="px-8 py-2 rounded-r-lg bg-gradient-to-r from-cyan-700 to-red-400  font-bold uppercase z-10 border-yellow-500 border-t border-b border-r shadow-lg cursor-pointer" />
                        </form>
                    </div>
                    {showModal && <Modal url={`${import.meta.env.VITE_BASE_URL}/${shortUrl}`} onClose={handleCloseModal} />} {/* Render the Modal component */}
                </div>

            </div>
        </Layout>
    )
}

export default Home