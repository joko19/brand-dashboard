import Layout from '../../Layout/Layout'
import Card from '../../components/Cards/Card'
import { IoAlertSharp, IoLocation } from 'react-icons/io5'
import dynamic from "next/dynamic";
import { useState } from 'react';
const MapWithNoSSR = dynamic(() => import("../../components/Map/Map"), { ssr: false });

export default function CustomerDatabase() {
    const [totalCustomer, setTotalCustomer] = useState([{
        total: '3.560',
        city: 'Tangerang'
    }, {
        total: '2.695',
        city: 'Bekasi'
    }, {
        total: '2.054',
        city: 'Depok'
    }, {
        total: '1.470',
        city: 'Malang'
    }, {
        total: '854',
        city: 'Bandung'
    },
    ])
    const legend = [{
        color: 'bg-gray-400',
        desc: 'Not Yet Reachable'
    }, {
        color: 'bg-red-100',
        desc: '< 100 Customers'
    }, {
        color: 'bg-red-200',
        desc: '100 - 500 Customers'
    }, {
        color: 'bg-red-400',
        desc: '> 500 Customers'
    },
    ]
    return (
        <Layout>
            <section>
                <h1 className='text-red-500 mb-4 font-bold text-3xl'>Customer Performance</h1>
                <div className='flex gap-2'>
                    <div className='cursor-pointer bg-red-500 text-white rounded-lg font-bold p-2'>Customer</div>
                    <div className='cursor-pointer text-red-500 font-bold border border-red-500 rounded-lg p-2'>Order</div>
                    <div className='cursor-pointer text-red-500 font-bold border border-red-500 rounded-lg p-2'>Product Sold</div>
                    <div className='cursor-pointer text-red-500 font-bold border border-red-500 rounded-lg p-2'>Sales</div>
                </div>
            </section>
            <div className='my-4' />
            <section>
                <Card className='w-full'>
                    <MapWithNoSSR />
                    <div className='flex my-4'>
                        {legend.map((value, index) => (
                            <div key={index} className="flex gap-2 text-center w-full ">
                                <div className={`${value.color} rounded-full w-3 h-3 my-auto`} > </div>
                                {value.desc}
                            </div>
                        ))}
                    </div>
                    <div className='flex w-full gap-4 mt-8 border-t-2 p-2'>
                        {totalCustomer.map((value, index) => (
                            <div key={index} className="w-full text-center">
                                <p className='text-xl font-bold'>{value.total}</p>
                                <p className='text-gray-600'>{value.city}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>
        </Layout>
    )
}
