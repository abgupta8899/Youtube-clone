import React from 'react'


import { LOGO, MENU } from '../Utils/constants'
import { toggleMenu } from '../Utils/appSlice'
import { useDispatch } from 'react-redux';


const Head = () => {
    const dispatch = useDispatch();
    const toggelMenuHandler = () => {
        dispatch(toggleMenu());

    }

    return (
        <div className=" grid grid-flow-col p-4 m-2 shadow-lg">
            <div className="flex col-span-1 ">
                <img
                    onClick={() => toggelMenuHandler()}
                    className="h-8"
                    alt='hamburger menu'
                    src={MENU}
                />

                <img
                    className="h-8 mx-2"
                    src={LOGO}

                    alt='youtube logo'
                />
            </div>
            <div className="col-span-10 px-12">
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"
                    type="text"
                    placeholder="Search"
                />
                <button className="  border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
                    🔍
                </button>
            </div>
            <div className="col-span-1">
                <img
                    className="h-8"
                    alt="user"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
            </div>


        </div>
    )
}

export default Head
