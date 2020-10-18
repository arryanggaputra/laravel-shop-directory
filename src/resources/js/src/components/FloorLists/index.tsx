import {InertiaLink} from '@inertiajs/inertia-react'
import {usePage} from '@inertiajs/inertia-react'
import React from 'react'
import {FloorItem} from 'types/ShopDirectory/type'

export const FloorLists = () => {
    const {floorLists} = usePage().props

    return (
        <div className="p-5 bg-gray-100 rounded-md ">
            <h1 className="font-bold text-2xl text-green-600 pb-5">
                Floor Lists
            </h1>
            <ul>
                {floorLists.map((item: FloorItem) => {
                    return (
                        <li
                            key={item.id}
                            className="py-2 border-b border-gray-300 hover:text-green-600">
                            <InertiaLink href={`/floor/${item.id}`}>
                                {item.name}
                            </InertiaLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
