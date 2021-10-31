import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultsContext } from '../context/ResultsContextProvider';
import Links from './Links';

const Search = () => {
    const [ text, setText ] = useState("");
    const { setSearchTerm } = useResultsContext();
    const [ debounceValue ] = useDebounce(text,3000);

    useEffect(() => {
        if(text) {
            setSearchTerm(text);
            console.log("yes");
        }
    },[debounceValue]);


    return (
        <div className="m-auto sm:-mt-10 mt-4">
            <div className="relative ml-2 sm:ml-10">
                <input 
                    type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search Goggl" spellCheck="false"
                    className="px-4 pr-10 py-2 h-10 sm-w-96 w-80 border rounded-full shadow-sm hover:shadow-lg dark:bg-gray-200 text-black outline-none"
                />
                {text && 
                    <button type="button" className="absolute top-1.5 md:right-20 right-4 text-xl text-gray-500" onClick={() => setText("")}>
                        X
                    </button>
                }
            </div>
            <Links />
        </div>
    )
};

export default Search;
