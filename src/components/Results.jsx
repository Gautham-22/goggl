import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultsContext } from '../context/ResultsContextProvider';

import Loading from './Loading';

const Results = () => {
    const { isLoading, results, getResults, searchItem, setSearchItem } = useResultsContext();
    const location = useLocation();

    useEffect(() => {
        getResults("/search/q=elon+musk&num=30");
    }, []);

    if(isLoading) {
        return <Loading />;
    }

    switch(location.pathname) {
        case "/search":
            return (
                <div className="flex flex-wrap justify-around space-y-6 md:px-30 px-10 py-12">
                    {results?.results?.map(({ title, link, description },index) => (
                        <div className="md:w-2/5 w-full mx-2" key={index}>
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0,30) : link}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                                <p className="text-md dark:text-gray-300 text-gray-700">
                                    {description.length > 120 ? description.substring(0,120) + "..." : description} 
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        default:
            return <h1>Sample result</h1>;
    }
};

export default Results;
