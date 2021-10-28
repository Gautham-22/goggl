import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultsContext } from '../context/ResultsContextProvider';

import Loading from './Loading';

const Results = () => {
    const { isLoading, results, getResults, searchTerm, setSearchTerm } = useResultsContext();
    const location = useLocation();

    useEffect(() => {
        if(searchTerm) {
            getResults(`${location.pathname}/q=${searchTerm}&num=40`);
        }
    }, [ searchTerm, location.pathname ]);

    if(isLoading) {
        return <Loading />;
    }

    switch(location.pathname) {
        case "/search":
            return (
                <div className="flex flex-wrap justify-around md:px-38 px-10 py-12">
                    {results?.results?.map(({ title, link, description },index) => (
                        <div className="md:w-2/5 w-full mx-2 my-5" key={index}>
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
        case "/images":
            return (
                <div className="flex flex-wrap justify-center items-stretch">
                    {results?.image_results?.map(({ image, link: { href,title } }, index ) => (
                        <a className="sm-p-3 p-5" href={href} target="_blank" rel="noreferrer" key={index} m-2>
                            <img className="h-4/6" src={image?.src} alt={title} loading="lazy" />
                            <p className="text-sm mt-2 w-36 break-words">
                                {title.length > 40 ? title.substring(0,40) : title}
                            </p>
                        </a>
                    ))}
                </div>
            );
        default:
            return <h1>Sample result</h1>;
    }
};

export default Results;
