import React from 'react'
import Layout from 'components/Layout'
import {PaginateData, TenantItem} from 'types/ShopDirectory/type'
import TenantCard from 'components/TentantCard'

interface IHome {
    tenants: PaginateData<TenantItem>
}

export default function Home(props: IHome) {
    const {tenants} = props

    return (
        <Layout>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 pb-20">
                {tenants.data?.map(item => {
                    return (
                        <TenantCard
                            floor={item.zone?.floor}
                            key={item.id}
                            data={item}
                        />
                    )
                })}
            </div>
        </Layout>
    )
}
