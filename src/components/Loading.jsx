import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className="flex justify-center itemss-center">
            <Loader 
                type="Puff"
                color="#00BFFF"
                height={550}
                width={90}
            />
        </div>
    );
};

export default Loading;
