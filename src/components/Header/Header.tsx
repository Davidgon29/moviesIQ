import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/constants";

const Header = () => {
    return (
        <div className='bg-red-600 mb-4 flex shadow-xl flex-wrap border-gray-200 px-2 lg:px-3 py-2.5 h-1/6'>
            <div className="flex text-4xl w-1/2 items-center text-white">
                Movie Raters
            </div>
            <div className="justify-end items-center align-middle lg:w-1/2 flex lg:order-1">
                <ul className='flex font-medium lg:flex-row space-x-8 '>
                    <li>
                        <Link to={ROUTES.HOME}
                              className='block py-2 pr-4 pl-3 text-white hover:text-gray-400'> Home </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.POPULAR}
                              className='block py-2 pr-4 pl-3 text-white hover:text-gray-400'> Popular </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.TOPRATED} className='block py-2 pr-4 pl-3 text-white hover:text-gray-400'> Top
                            Rated </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.NOWPLAYING}
                              className='block py-2 pr-4 pl-3 text-white hover:text-gray-400'> Now Playing </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.MYFAVORITES}
                              className='block py-2 pr-4 pl-3 text-white hover:text-gray-400'> My favorites </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;
