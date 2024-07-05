import React from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Idk = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-zinc-950 border border-zinc-100 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
                <form action="">
                    <div className="relative my-4">
                        <BiUser className="absolute top-3 left-3 text-gray-300" />
                        <input type="email" className="block w-72 py-2.5 pl-10 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:border-zinc-600 focus:outline-none focus:ring-0" placeholder="Your Email"/>
                        <label htmlFor="email" className="absolute left-3 -top-3 text-sm text-gray-300 pointer-events-none transition-all">Your Email</label>
                    </div>
                
                    <div className="relative my-4">
                        <AiOutlineLock className="absolute top-3 left-3 text-gray-300" />
                        <input type="password" className="block w-72 py-2.5 pl-10 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:border-zinc-600 focus:outline-none focus:ring-0" placeholder="Your Password"/>
                        <label htmlFor="password" className="absolute left-3 -top-3 text-sm text-gray-300 pointer-events-none transition-all">Your Password</label>
                    </div>

                    <div className="relative my-4">
                        <AiOutlineLock className="absolute top-3 left-3 text-gray-300" />
                        <input type="password" className="block w-72 py-2.5 pl-10 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:border-zinc-600 focus:outline-none focus:ring-0" placeholder="Confirm Your Password"/>
                        <label htmlFor="confirmPassword" className="absolute left-3 -top-3 text-sm text-gray-300 pointer-events-none transition-all">Confirm Your Password</label>
                    </div>

                    <button className="w-full mt-6 py-2 rounded-full bg-zinc-900 text-zinc-300 hover:bg-zinc-950 hover:text-white transition-colors duration-300" type="submit">Register</button>
                    
                    <div className="mt-4 text-white text-center">
                        <div>
                            <span>Already have an account? <Link className="text-blue-500" to="/login">Login</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Idk;
