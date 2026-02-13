import React from 'react'
import Button from '@mui/material/Button';
import { CiSearch } from "react-icons/ci";

function Search() {
    return (
        <>
            <div className="searchbox d-flex items-center w-full max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                <Button className="searchicone rounded-none rounded-r-2xl bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 flex items-center justify-center">
                    <CiSearch className="text-xl" />
                </Button>
                {/* Input box */}
                <input
                    type="text"
                    placeholder="quick finding..."
                    className="textbox flex-1 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"

                />

            </div>
        </>
    )
}

export default Search
