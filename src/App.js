import React, {useState} from 'react'

import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';

const App = () => {

    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? "dark" : ''}>
            <div className="bg-gray-300 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <div className="min-h-screen max-w-screen-2xl m-auto">
                    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                    <Routes />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;