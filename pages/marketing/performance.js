import Layout from '../../Layout/Layout'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Card from '../../components/Cards/Card';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
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
    const [leadFunnel, setLeadFunnel] = useState([
        {
            name: "Web Visits",
            total: "164,283",
            percentage: '',
            isUp: true
        },
        {
            name: "Caputured Lead",
            total: "7,532",
            percentage: '4.6%',
            isUp: true
        },
        {
            name: "Qualified Lead",
            total: "4,632",
            percentage: '61.5%',
            isUp: false
        },
        {
            name: "Sales Accepted",
            total: "4,042",
            percentage: '87.3%',
            isUp: false
        },
        {
            name: "Opportunity",
            total: "1,832",
            percentage: '45.3%',
            isUp: true
        },
        {
            name: "Win",
            total: "262",
            percentage: '14.3%',
            isUp: true
        },
    ])
    return (
        <Layout>
            {/* Marketing Performance */}
            <section className='px-4'>
                <h1 className='text-red-500 font-bold text-3xl mb-4'>Marketing Performance</h1>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex w-full'>
                        <Card className='w-full'>
                            <p className='text-red-500 font-bold mb-2'>Lead Funnel</p>
                            <div className='flex flex-col'>
                                {leadFunnel.map((value, index) => (
                                    <div className='flex text-lg' key={index}>
                                        <div className='w-full text-gray-700 text-xs md:text-lg'>{value.name}</div>
                                        <div className='w-full text-gray-700 text-xs md:text-lg'>{value.total}</div>
                                        <div className={`w-full text-xs md:text-lg ${value.isUp ? 'text-green-500' : 'text-red-500'}`}>{value.percentage}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                    <div className='flex w-full'>
                        <Card className='w-full'>
                            <p className='text-red-500 font-bold mb-2'>Traffic Sources</p>
                            <Chart
                                options={dataChart?.options}
                                series={dataChart?.series}
                                type="area"
                                height="180"
                            />
                        </Card>
                    </div>
                </div>
            </section>
            <div className='my-4' />
            <section className='flex flex-col md:flex-row gap-4 px-4'>
                <Card className='w-full'>
                    <p className='text-red-500 font-bold mb-2'>Lead This Month</p>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='w-full'>
                            <p className='font-bold'>Leads(Today)</p>
                            <p>77</p>
                            <ProgressBar percentage={45} />
                        </div>
                        <div className='w-full'>
                            <p className='font-bold'>Leads(This Month)</p>
                            <p>2,310</p>
                            <ProgressBar percentage={80} />
                        </div>
                        <div className='w-full'>
                            <p className='font-bold'>Web Users</p>
                            <p>155,456</p>
                            <ProgressBar percentage={95} />
                        </div>
                    </div>
                </Card>
                <Card className='w-full md:w-1/2'>
                    <p className='text-red-500 font-bold mb-2'>Key Metrics</p>
                    <div>
                        <div className='flex'>
                            <FaCaretDown color='red' size={42} /><p className='text-3xl font-bold'>$775.5K</p>
                        </div>
                        <p className='text-xs'>Total revenue MTD, compared to $1,005.8K last month</p>
                    </div>
                    <div>
                        <div className='flex'>
                            <FaCaretDown color='red' size={42} /><p className='text-3xl font-bold'>$14.5K</p>
                        </div>
                        <p className='text-xs'>Average revenue MTD, compared to $45.8K last month</p>
                    </div>
                </Card>
            </section>
        </Layout>
    )
}
