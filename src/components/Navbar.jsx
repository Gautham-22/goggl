import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="py-5 px-2 pb-0 sm:p-5 sm:pb-0 border-b border-gray-200 dark:border-gray-700 flex flex-wrap items-center sm:justify-between justify-center">
            <div className="space-x-5 w-screen flex flex-wrap justify-between items-center">
                <Link to="/">
                    <p className="px-1.5 py-2 rounded-md bg-blue-500 dark:bg-gray-500 bg-opacity-85 text-2xl font-bold text-gray-300 dark:text-gray-900">
                        Goggl 🔎
                    </p>
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="p-2 border rounded-full hover:shadow-lg bg-white dark:bg-gray-50 text-xl dark:text-gray-900">
                    {darkTheme ? "Light 💡" : "Dark 🌙"}
                </button>
            </div>
            <Search />
        </div>
    )
};

export default Navbar;
