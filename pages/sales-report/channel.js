import { useState } from 'react';
import Card from '../../components/Cards/Card'
import Layout from '../../Layout/Layout'
import CustomModal from '../../components/Modal/CustomModal';
import { MdOutlineAttachMoney, MdOutlinePriceChange, MdShoppingCart } from 'react-icons/md'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SalesReport() {
    const [activeChart, setActiveChart] = useState('byTime')
    const [showAddModal, setShowAddModal] = useState(false)
    const [dataChartbyTime, setDataChartbyTime] = useState({
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
    const [dataChartbyMarketPlace, setDataChartbyMarketPlace] = useState({
        series: [{
            name: 'Previous Revenue',
            data: [54, 17, 33, 21, 6]
        }, {
            name: 'Current Revenue',
            data: [69, 31, 32, 6, 30]
        }, {
            name: 'Average Revenue',
            data: [16, 39, 59, 45, 25]
        },],
        options: {
            chart: {
                height: 350,
                type: 'basic-bar'

            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ["Tokopedia", "Shopee", "Bukalapak", "Blibi", "Lazada"]
            },
            colors: ['#d03737', '#00ff2f', '#0008ff'],
            yaxis: [{
                title: {
                    text: 'Total Revenue by Market Place',
                },

            }]
        },
    })

    return (
        <Layout>
            <div className='flex justify-between px-4'>
                <h1 className='text-red-500 font-bold text-3xl mb-4'>Dashboard</h1>
                <div>
                    <button className='flex bg-blue-500 inline-block p-2 text-white rounded hover:bg-blue-600' onClick={() => setShowAddModal(true)}>Add Data</button>
                </div>
            </div>
            <section className='px-4'>
                <div className='flex flex-col md:flex-row gap-4'>
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
                            <div className={`${activeChart === 'byTime' ? 'bg-red-500 text-white rounded-lg font-bold p-2 cursor-pointer' : 'text-red-500 font-bold border border-red-500 rounded-lg p-2 cursor-pointer'}`} onClick={() => setActiveChart('byTime')}>Time</div>
                            <div className={`${activeChart === 'byMarketPlace' ? 'bg-red-500 text-white rounded-lg font-bold p-2 cursor-pointer' : 'text-red-500 font-bold border border-red-500 rounded-lg p-2 cursor-pointer'}`} onClick={() => setActiveChart('byMarketPlace')}>Marketplace</div>
                        </div>
                        <div>
                            <select name="cars" id="cars" defaultValue="Sales Channel" className="text-red-500 cursor-pointer font-bold bg-white p-2 rounded-lg">
                                <option value="volvo">Revenue</option>
                                <option value="volvo">Revenue 1</option>
                                <option value="volvo">Revenue 2</option>
                            </select>
                        </div>
                    </div>
                    {activeChart === 'byTime' ? (
                        <Chart
                            options={dataChartbyTime?.options}
                            series={dataChartbyTime?.series}
                            type="area"
                            height={280}
                        />
                    ) : (
                        <Chart
                            options={dataChartbyMarketPlace?.options}
                            series={dataChartbyMarketPlace?.series}
                            type="bar"
                            height={280}
                        />
                    )}
                </Card>
            </section>
            <CustomModal visible={showAddModal} onClose={() => setShowAddModal(false)}>
                <div className="bg-white w-96 p-5 rounded">
                    <h1 className="font-bold text-2xl text-blue-500">
                        Add Data for this Month
                    </h1>
                    <form>
                        <div>
                            <label className='text-gray-500 text-sm'>Total Revenue</label>
                            <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="Pendapatan bulan ini" />
                        </div>
                        <div>
                        </div>
                        <div className='mt-2'>
                            <label className='text-gray-500 text-sm'>Total Order</label>
                            <input type="number" className="w-full form border mt-1 p-2 rounded" placeholder="Total order bulan ini" />
                        </div>
                        <div className='flex flex-row-reverse gap-4 mt-4'>
                            <button className='bg-blue-500 p-2 text-white rounded cursor-pointer hover:bg-blue-600' onClick={() => setShowAddModal(false)}>
                                Save
                            </button>
                            <div className='p-2 rounded cursor-pointer text-gray-700 bg-gray-200 hover:bg-gray-300' onClick={() => setShowAddModal(false)}>
                                Cancel
                            </div>
                        </div>
                    </form>
                </div>
            </CustomModal>
        </Layout>
    )
}
