import Layout from '../../Layout/Layout'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Card from '../../components/Cards/Card';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function MarketingDashboard() {
    const [dataChart, setDataChart] = useState({
        series: [{
            name: 'Referral',
            data: [19, 25, 33, 29, 54, 17, 33, 21, 6, 5, 6, 12]
        }, {
            name: 'Search',
            data: [25, 17, 26, 69, 69, 31, 32, 6, 30, 49, 28, 24]
        }, {
            name: 'Direct',
            data: [29, 27, 16, 65, 62, 21, 30, 16, 39, 59, 45, 25]
        },],
        options: {
            chart: {
                // height: 350,
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
            colors: ['#7778e3', '#e3d677', '#85e377'],
        },
    })
    return (
        <Layout>
            {/* Marketing Performance */}
            <section>
                <h1 className='text-red-500 font-bold text-3xl'>Marketing Performance</h1>
                <div className='flex'>
                    <div className='flex w-full'>

                    </div>
                    <div className='flex w-full'>
                        <Card className='w-full'>
                            <p>Traffic Sources</p>
                            <Chart
                                options={dataChart?.options}
                                series={dataChart?.series}
                                type="area"
                            />
                        </Card>
                    </div>
                </div>
            </section>

            <div className='my-4' />
            {/* Marketing Calendar */}
            <section>
                <h1 className='text-red-500 font-bold text-3xl'>Marketing Calendar</h1>
            </section>
        </Layout>
    )
}
