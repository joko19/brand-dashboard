import { useState } from 'react';
import Card from '../../components/Cards/Card'
import Layout from '../../Layout/Layout'
import { MdOutlineAttachMoney, MdOutlinePriceChange, MdShoppingCart } from 'react-icons/md'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SalesReport() {
    const [dataChart, setDataChart] = useState({
        series: [{
            name: 'Previous Revenue',
            data: [19, 25, 33, 29, 54, 17, 33, 21, 6, 5, 6, 12]
        }, {
            name: 'Current Revenue',
            data: [25, 17, 26, 69, 69, 31, 32, 6, 30, 49, 28, 24]
        }, {
            name: 'Average Revenue',
            data: [29, 27, 16, 65, 62, 21, 30, 16, 39, 59, 45, 25]
        },],
        options: {
            chart: {
                height: 350,
                type: 'area'

            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"]
            },
            colors: ['#d03737', '#00ff2f', '#0008ff'],
            yaxis: [{
                title: {
                    text: 'Total Revenue (Rp)',
                },

            }]
        },
    })

    return (
        <Layout>
            <section className='px-4'>
                <h1 className='text-red-500 font-bold text-3xl mb-4'>Sales Channel</h1>
                <div className='flex gap-4'>
                    <Card className='w-full'>
                        <div className='flex gap-2'>
                            <MdOutlineAttachMoney color='white' className='bg-red-500 rounded' size={16} />
                            <h1 className='font-bold '>Total Revenue</h1>
                        </div>
                        <p className='ml-6 text-gray-500 text-xl'>Rp. 43.405.000 <span className='text-green-500 text-green-500 bg-green-100 p-1 font-bold rounded-full text-xs'>+5%</span></p>
                    </Card>
                    <Card className='w-full'>
                        <div className='flex gap-2'>
                            <MdOutlinePriceChange color='white' className='bg-red-500 rounded' size={16} />
                            <h1 className='font-bold'>Average Revenue</h1>
                        </div>
                        <p className='ml-6 text-gray-500 text-xl'>Rp. 12.997.000 <span className='text-green-500 bg-green-100 p-1 font-bold rounded-full text-xs'>+9%</span></p>
                    </Card>
                    <Card className='w-full'>
                        <div className='flex gap-2'>
                            <MdShoppingCart color='white' className='bg-red-500 rounded' size={16} />
                            <h1 className='font-bold'>Total Order</h1>
                        </div>
                        <p className='ml-6 text-gray-500 text-lg'>25000 Order<span className='text-green-500 text-green-500 bg-green-100 p-1 font-bold rounded-full text-xs'> +7%</span></p>
                    </Card>
                </div>
                <div className='my-4' />
                <Card>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <div className='bg-red-500 text-white rounded-lg font-bold p-2'>Time</div>
                            <div className='text-red-500 font-bold border border-red-500 rounded-lg p-2'>Marketplace</div>
                            <div className='text-red-500 font-bold border border-red-500 rounded-lg p-2'>Indikator</div>
                        </div>
                        <div>
                            <select name="cars" id="cars" defaultValue="Sales Channel" className="text-red-500 cursor-pointer font-bold bg-white p-2 rounded-lg">
                                <option value="volvo">Revenue</option>
                                <option value="volvo">Revenue 1</option>
                                <option value="volvo">Revenue 2</option>
                            </select>
                        </div>
                    </div>
                    <Chart
                        options={dataChart?.options}
                        series={dataChart?.series}
                        type="area"
                        height={280}
                    />
                </Card>
            </section>
        </Layout>
    )
}
