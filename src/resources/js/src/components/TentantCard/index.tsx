import React from 'react'
import {FloorItem, TenantItem} from 'types/ShopDirectory/type'

interface ITenantCard {
    data: TenantItem
    floor?: FloorItem
}

const TenantCard = (props: ITenantCard) => {
    const {data, floor} = props

    return (
        <div className="border border-gray-300 rounded-md overflow-hidden hover:shadow-md hover:border-green-400 cursor-pointer">
            <div className="h-32 w-full flex items-center overflow-hidden bg-gray-100">
                <img
                    src={
                        data.logo_url ||
                        'https://picsum.photos/seed/picsum/400/300'
                    }
                    className=" object-fill w-full"
                    alt={data.name}
                />
            </div>
            <div className="py-5 flex flex-col text-center">
                <span className="text-lg">{data.name}</span>
                <span className="text-xs font-bold text-green-800">
                    {data.zone?.name}
                </span>
            </div>
            <div className="text-center py-2 bg-gray-200">
                {floor && (
                    <span className="text-sm font-bold">{floor.name}</span>
                )}
            </div>
        </div>
    )
}

export default TenantCard
