import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFound component renders a 404 error page.
 * 
 * This component displays a message indicating that the page was not found, along with a link to navigate the user back to the homepage.
 * It is typically used when a user tries to access a route that doesn't exist in the application.
 * 
 * @component
 * @example
 * return (
 *   <NotFound />
 * );
 */

const NotFound = () => {

    return (
            <div className="flex flex-col items-center justify-center h-screen px-6 w-full text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-red-400">404 - Not Found</h1>
                <p className="mt-4 text-base md:text-lg text-gray-700 max-w-md">
                    Sorry, the page you are looking for does not exist.
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

export default NotFound;
