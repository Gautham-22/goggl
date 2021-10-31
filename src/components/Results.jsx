import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultsContext } from '../context/ResultsContextProvider';

import Loading from './Loading';

const Results = () => {
    const { isLoading, results, getResults, searchTerm } = useResultsContext();
    const location = useLocation();

    useEffect(() => {
        if(searchTerm) {
            if(location.pathname === "/videos") {
                getResults(`/search/q=${searchTerm} videos`,location.pathname);
            } else {
                getResults(`${location.pathname}/q=${searchTerm}&num=40`,location.pathname);
            }
        }
    }, [ searchTerm, location.pathname ]);

    if(isLoading) {
        return <Loading />;
    }

    if(results && results?.length === 0) {
        return (
            <div className="flex justify-center align center py-60">
                <h1 className="dark:text-gray-300 text-gray-700">Results will appear here</h1>
            </div>
        )
    }

    switch(location.pathname) {
        case "/search":
            return (
                <div className="flex flex-wrap justify-around md:px-38 px-10 py-5 sm:py-12">
                    {results?.map(({ title, link, description },index) => {
                        if((results && index === results?.length - 1 && results?.length % 2 === 1) || !link) {
                            return <div></div>;
                        }
                        return (
                            <div className="md:w-2/5 w-full mx-2 my-5" key={index}>
                                <a href={link} target="_blank" rel="noreferrer">
                                    <p className="text-sm">
                                        {link?.length > 30 ? link?.substring(0,30) : (link || " ")}
                                    </p>
                                    {title && (
                                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                            {title}
                                        </p>
                                    )}
                                    {description && (
                                        <p className="text-md dark:text-gray-300 text-gray-700">
                                            {description?.length > 120 ? description?.substring(0,120) + "..." : (description || " ")} 
                                        </p>
                                    )}
                                </a>
                            </div>
                        );
                    })}
                </div>
            );
        case "/images":
            return (
                <div className="flex flex-wrap justify-center items-stretch">
                    {results?.map(({ image, link: { href,title } }, index ) => {
                        if(!href) {
                            return <a></a>;
                        }
                        return (
                            <a className="sm-p-3 p-5 m-2" href={href} target="_blank" rel="noreferrer" key={index}>
                                {image?.src && (
                                    <img className="h-4/6" src={image?.src} alt={title} loading="lazy" />
                                )}
                                {title && (
                                    <p className="text-sm mt-2 w-36 break-words">
                                        {title?.length > 40 ? title?.substring(0,40) : (title || " ")}
                                    </p>
                                )}
                            </a>
                        );
                    })}
                </div>
            );
        case "/news":
            return (
                <div className="flex flex-wrap justify-around md:px-38 px-10 py-5 sm:py-12">
                    {results?.map(({ links, id, source, title }, index) => {
                        if(results && index === results?.length - 1 && results?.length % 2 === 1) {
                            return <div></div>;
                        }
                        return (
                            <div className="md:w-2/5 w-full mx-2 my-5" key={id}>
                                {links?.[0].href && (
                                    <a href={links?.[0].href} target="_blank" rel="noreferrer">
                                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                            {title}
                                        </p>
                                    </a>
                                )}
                                {source?.href && (
                                    <div className="my-1">
                                        <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline">
                                            {source?.href}
                                        </a>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            );
        case "/videos":
            return (
                <div className="flex flex-wrap p-5 lg:px-10 justify-center">
                    {results?.map((video,index) => {
                        return (
                            <div key={index} className="p-4 sm:w-4/5 md:w-1/2 lg:w-1/3 w-full h-72">
                                {video?.additional_links?.[0].href && (
                                    <ReactPlayer url={video.additional_links?.[0].href} controls width="100%" height="100%" />
                                )}
                            </div>
                        );
                    })}
                </div>
            );
        default:
            return <h1>No results</h1>;
    }
};

export default Results;
