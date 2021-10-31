import React from 'react';
import { NavLink } from 'react-router-dom';

let links = [
    {href: "/search", text: "🔎 All"},
    {href: "/images", text: "📷 Images"},
    {href: "/news", text: "📄 News"},
    {href: "/videos", text: "📺 Videos"}
];

const Links = () => {
    return (
        <div className="flex items-center mt-4">
            {links.map((link,index) => (
                <NavLink to={link.href} key={index} activeClassName="border-b-2 border-blue-700 text-blue-700 dark:text-blue-300 pb-1" className="md:mx-5 mx-2" >
                    {link.text}
                </NavLink>
            ))}
        </div>
    )
};

export default Links;
