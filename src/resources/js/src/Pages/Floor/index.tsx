import Layout from 'components/Layout'
import TenantCard from 'components/TentantCard'
import React from 'react'
import {FloorItem, PaginateData, TenantItem} from 'types/ShopDirectory/type'

interface FloorPage {
    floor: FloorItem
    tenants: PaginateData<TenantItem>
}

const FloorPage = (props: FloorPage) => {
    const {floor, tenants} = props
    console.log('tenants', tenants)

    return (
        <Layout>
            <div className="border-b border-gray-400 mb-5">
                <h1 className="text-4xl font-bold">{floor.name}</h1>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 pb-20">
                {tenants.data?.map(item => {
                    return (
                        <TenantCard floor={floor} key={item.id} data={item} />
                    )
                })}
            </div>
        </Layout>
    )
}

export default FloorPage
