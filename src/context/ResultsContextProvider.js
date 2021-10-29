import React, { useState } from 'react';
import { createContext, useContext } from 'react';

const ResultsContext = createContext();    
const baseurl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultsContextProvider = ({children}) => {
    const [ isLoading,setIsLoading ] = useState(false);
    const [ results,setResults ] = useState([]);
    const [ searchTerm,setSearchTerm ] = useState('elon musk');

    const getResults = async (query, type) => {
        setIsLoading(true);

        try {

            const response = await fetch(`${baseurl}${query}`, {
                method: "GET",
                headers: {
                    "x-user-agent": "desktop",
                    "x-rapidapi-host": "google-search3.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY
                }
            });
            const data = await response.json();

            if(type === "/images") {
                console.log(data.image_results);
                setResults(data.image_results);
            } else if(type === "/news") {
                console.log(data.entries);
                setResults(data.entries);
            } else {
                console.log(data.results);
                setResults(data.results);
            }

        } catch(err) {
            console.log(err);
        }

        setIsLoading(false);
    };

    return (
        <ResultsContext.Provider value={{isLoading, results, getResults, searchTerm, setSearchTerm}}>
            {children}
        </ResultsContext.Provider>
    );
};

export const useResultsContext = () => useContext(ResultsContext);