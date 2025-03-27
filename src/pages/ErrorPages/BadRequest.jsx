import React from 'react';
import { Link } from 'react-router-dom';

const BadRequest = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-6 w-full text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-red-400">400 - Bad Request</h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 max-w-md">
                Sorry, your request was invalid or cannot be processed.
            </p>
            <Link 
                to="/" 
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-sm md:text-base hover:bg-blue-600 transition duration-200"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default BadRequest;
