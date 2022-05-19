import { useState } from 'react';
import Card from '../../components/Cards/Card'
import Layout from '../../Layout/Layout'
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
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },

        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ],
        theme: {
            pallete: 'pallete1'
        }
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
            name: 'Current Revenue',
            data: [19, 25, 33, 29, 54, 17, 33, 21, 6, 5, 6, 12]
        }, {
            name: 'Previous Revenue',
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
        },
    })

    return (
        <Layout>
            {/* product performance */}
            <section>
                <h1 className='text-red-500 font-bold text-3xl'>Product Performance</h1>
                <div className='flex flex-col md:flex-row w-full gap-4'>
                    <div className='flex w-full md:w-1/2 bg-white rounded '>
                        <Card className='w-full'>
                            <h1 className='font-bold text-xl'>Product Sold</h1>
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
                        <Card className='w-full'>
                            <h1 className='font-bold text-xl'>Best Selling Product</h1>
                            <table className="table md:min-w-full overflow-auto divide-y divide-gray-200 text-sm">
                                <thead className="bg-black-9" >
                                    <th scope="col" className="px-6 h-12 text- tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 h-12 text- tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 h-12 text- tracking-wider">
                                        Total Sold
                                    </th>
                                    <th scope="col" className="px-6 h-12 text- tracking-wider">
                                        Lorem Ipsum
                                    </th>
                                    <th scope="col" className="px-6 h-12 text- tracking-wider">
                                        Lorem Ipsum
                                    </th>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {listProductSold.map((item, index) => (
                                        <tr key={index} className="h-12">
                                            <td className="px-6 h-12 whitespace-nowrap text-center">
                                                {item.nameProduct}
                                            </td>
                                            <td className="px-6 h-12 whitespace-nowrap text-center">
                                                {item.price}
                                            </td>
                                            <td className="px-6 h-12 whitespace-nowrap text-center">
                                                {item.totalSold}
                                            </td>
                                            <td className="px-6 h-12 whitespace-nowrap text-center">
                                                {item.nameProduct}
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
                        <h1 className='font-bold'>Total Revenue</h1>
                        <p>Rp. 43.405.000 <span className='text-green-500'>+5%</span></p>
                    </Card>
                    <Card className='w-full'>
                        <h1 className='font-bold'>Average Revenue</h1>
                        <p>Rp. 12.997.000 <span className='text-green-500'>+9%</span></p>
                    </Card>
                    <Card className='w-full'>
                        <h1 className='font-bold'>Total Order</h1>
                        <p>25000 Order<span className='text-green-500'> +7%</span></p>
                    </Card>
                </div>
                <Chart
                    options={dataChart?.options}
                    series={dataChart?.series}
                    type="area"
                    height={280}
                />
            </section>
        </Layout>
    )
}
