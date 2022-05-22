import Layout from '../../Layout/Layout'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Card from '../../components/Cards/Card';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
    MonthView
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2022-05-22';
const schedulerData = [
    { startDate: '2022-01-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
    { startDate: '2022-31-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

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
            <section>
                <h1 className='text-red-500 font-bold text-3xl'>Marketing Performance</h1>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex w-full'>
                        <Card className='w-full'>
                            <p className='mb-2'>Lead Funnel</p>
                            <div className='flex flex-col'>
                                {leadFunnel.map((value, index) => (
                                    <div className='flex text-lg' key={index}>
                                        <div className='w-full text-gray-700'>{value.name}</div>
                                        <div className='w-full text-gray-700'>{value.total}</div>
                                        <div className={`w-full ${value.isUp ? 'text-green-500' : 'text-red-500'}`}>{value.percentage}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                    <div className='flex w-full'>
                        <Card className='w-full'>
                            <p>Traffic Sources</p>
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
            {/* Marketing Calendar */}
            <section>
                <h1 className='text-red-500 font-bold text-3xl'>Marketing Calendar</h1>
                <Scheduler
                    data={schedulerData}
                >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <MonthView />
                    <Appointments />
                </Scheduler>
            </section>
        </Layout>
    )
}
