import { useState } from 'react';
import Card from '../../components/Cards/Card'
import Layout from '../../Layout/Layout'
import { IoIosStats } from 'react-icons/io'
import { IoAlertSharp } from 'react-icons/io5'
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
    return (
        <Layout>
            {/* product performance */}
            <section className='px-4'>
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
        </Layout>
    )
}
