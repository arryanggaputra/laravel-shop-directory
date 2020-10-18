import {InertiaLink} from '@inertiajs/inertia-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-green-700 p-5 px-10 shadow-md">
            <div className="container max-w-screen-lg mx-auto">
                <h1 className="text-xl font-bold text-white">
                    <InertiaLink href="/">Shop Directory Listing</InertiaLink>
                </h1>
            </div>
        </div>
    )
}

export default Navbar
