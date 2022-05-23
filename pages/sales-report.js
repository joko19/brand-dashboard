import { useState } from 'react';
import Card from '../components/Cards/Card'
import Layout from '../Layout/Layout'
import { IoIosStats } from 'react-icons/io'
import { IoAlertSharp } from 'react-icons/io5'
import { MdOutlineAttachMoney, MdOutlinePriceChange, MdShoppingCart } from 'react-icons/md'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SalesReport() {
    const [productSoldDonut, setproductSoldDonut] = useState({
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    })
    const [productSoldBar, setProductSoldBar] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994]
            },
            colors: '#aa0f0f'
        },
        series: [
            {
                name: "series-1",
                data: [80, 40, 70, 61]
            }
        ]
    })
    const [listProductSold, setListProductSold] = useState([{
        nameProduct: "lorem ipsum",
        price: "Rp.99.000",
        totalSold: 64,
    }, {
        nameProduct: "lorem ipsum",
        price: "Rp.99.000",
        totalSold: 64,
    }, {
        nameProduct: "lorem ipsum",
        price: "Rp.99.000",
        totalSold: 64,
    }, {
        nameProduct: "lorem ipsum",
        price: "Rp.99.000",
        totalSold: 64,
    }, {
        nameProduct: "lorem ipsum",
        price: "Rp.99.000",
        totalSold: 64,
    },
    ])
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
            {/* product performance */}
            <section>
                <h1 className='text-red-500 font-bold text-3xl'>Product Performance</h1>
                <div className='flex gap-4 mt-4 mb-4'>
                    <select name="cars" id="cars" defaultValue="Sales Channel" className="text-red-500 cursor-pointer font-bold bg-white border-2 border-red-500 p-2 rounded-lg">
                        <option value="volvo">Sales Chanel</option>
                        <option value="volvo">Sales Chanel 1</option>
                        <option value="volvo">Sales Chanel 2</option>
                    </select>
                    <select name="cars" id="cars" defaultValue="Sales Channel" className="text-red-500 cursor-pointer font-bold bg-white border-2 border-red-500 p-2 rounded-lg">
                        <option value="volvo">Period</option>
                        <option value="volvo">Period 1</option>
                        <option value="volvo">Period 2</option>
                    </select>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-4'>
                    <div className='flex w-full md:w-1/2 bg-white rounded '>
                        <Card className='w-full'>
                            <div className='flex gap-2'>
                                <IoAlertSharp color='white' className='bg-red-500 rounded' size={24} />
                                <p className='font-bold text-xl flex gap-2'> Product Sold</p>
                            </div>
                            <Chart options={productSoldDonut.options} series={productSoldDonut.series} type="donut" width="100%" />
                            <Chart
                                options={productSoldBar.options}
                                series={productSoldBar.series}
                                type="bar"
                                width="100%"
                            />
                        </Card>
                    </div>
                    <div className='flex w-full'>
                        <Card className='w-full overflow-x-auto'>
                            <div className='flex gap-2'>
                                <IoIosStats color='white' className='bg-red-500 rounded' size={24} />
                                <p className='font-bold text-xl'>Best Selling Product</p>
                            </div>
                            <table className="table md:min-w-full overflow-auto divide-y divide-gray-200 text-sm">
                                <thead className="text-gray-500" >
                                    <th scope="col" className="px-6 h-12 tracking-wider">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-6 h-12 tracking-wider">
                                        Revenue
                                    </th>
                                    <th scope="col" className="px-6 h-12 tracking-wider">
                                        Sold
                                    </th>
                                    <th scope="col" className="px-6 h-12 tracking-wider">
                                        Customer
                                    </th>
                                    <th scope="col" className="px-6 h-12 tracking-wider">
                                        Marketplace
                                    </th>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {listProductSold.map((item, index) => (
                                        <tr key={index} className="h-12 hover:bg-gray-100">
                                            <td className="px-6 h-12 whitespace-nowrap text-center">
                                                {item.nameProduct}
                                            </td>
                                            <td className="px-6 h-12 whitespace-nowrap text-center">
                                                <div className='flex'>
                                                    {item.price} <FaCaretUp color='green' /> <span className='text-green-500'>20%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 h-12 whitespace-nowrap text-center">
                                                <div className='flex'>
                                                    {item.price} <FaCaretDown color='red' /> <span className='text-red-500'>176</span>
                                                </div>
                                            </td>
                                            <td className="px-6 h-12 whitespace-nowrap text-center">
                                                <div className='flex'>
                                                    {item.price} <FaCaretUp color='green' /> <span className='text-green-500'>156%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 h-12 whitespace-nowrap text-center">
                                                {item.nameProduct}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table >
                        </Card>
                    </div>
                </div>
            </section>
            <div className='my-12' />
            {/* sales channel */}
            <section>
                <h1 className='text-red-500 font-bold text-3xl'>Sales Performance</h1>
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
