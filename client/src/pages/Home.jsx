import React from 'react'
import Layout from '../components/Layout'

const Home = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className="flex flex-col text-center m-10">
                    <h1 className='text- text-5xl font-bold leading-loose drop-shadow-sm bg-gradient-to-r from-sky-400 to-red-400 bg-clip-text text-transparent'>Shorten Your Loooong Links!!</h1>
                    <p className='text-semibold tracking-wide'>Linky is an URL shortening service that streamlines your online experience.</p>
                    <div className="flex flex-row justify-center p-4">
                        <form>
                            <input type="text" className="rounded-l-lg p-2 border-t m-4 w-96 mr-0 border-b border-l text-md text-slate-800 border-yellow-500 bg-white " placeholder="Your Ugly Url...." />
                            <input type="submit" className="px-8 py-2 rounded-r-lg bg-gradient-to-r from-cyan-700 to-red-400  font-bold uppercase z-10 border-yellow-500 border-t border-b border-r shadow-lg cursor-pointer" />
                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Home