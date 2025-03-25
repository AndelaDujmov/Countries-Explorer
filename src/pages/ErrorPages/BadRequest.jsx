import React from 'react';
import { Link } from 'react-router-dom';

// This component is used to display a 400 - Bad Request error page
// It contains a message and a link to the home page

const BadRequest = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-full">
            <h1 className="text-5xl font-bold text-red-600">400 - Bad Request</h1>
            <p className="mt-4 text-lg text-gray-700">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                Go to Home
            </Link>
        </div>
    );
};

export default BadRequest;
