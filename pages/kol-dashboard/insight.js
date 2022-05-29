import Card from '../../components/Cards/Card'
import Layout from '../../Layout/Layout'
import dynamic from 'next/dynamic';
import { useState } from 'react'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function KolDashboard() {
    const [kolInsight, setKolInsight] = useState({

        series: [{
            name: 'Followers',
            type: 'column',
            data: [44, 50, 14, 71, 22, 13, 20, 32, 72, 20, 25, 16]
        }, {
            name: 'Post',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
            },
            stroke: {
                width: [0, 4]
            },
            // title: {
            //     text: 'Traffic Sources'
            // },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
                type: 'datetime'
            },
            colors: ['#ef7676', '#d53838', '#d61717'],
        },
    })
    return (
        <Layout>
            {/* KOL Insight */}
            <section className='px-4 my-4'>
                <h1 className='text-red-500 font-bold text-3xl mb-4'>KOL Insight</h1>
                <Card>
                    <div className='flex flex-wrap gap-4'>
                        <div className='border rounded p-1 flex gap-1 text-gray-800'> <input type="checkbox" className='my-auto' /> Follower <div className='bg-red-200 w-3 h-3 rounded my-auto' /></div>
                        <div className='border rounded p-1 flex gap-1 text-gray-800'> <input type="checkbox" className='my-auto' /> Post <div className='bg-red-500 w-3 h-3 rounded my-auto' /></div>
                        <div className='border rounded p-1 flex gap-1 text-gray-800'> <input type="checkbox" className='my-auto' /> Reach <div className='bg-yellow-500 w-3 rounded h-3 my-auto' /></div>
                        <div className='border rounded p-1 flex gap-1 text-gray-800'> <input type="checkbox" className='my-auto' /> Like <div className='bg-red-700 w-3 h-3 rounded my-auto' /></div>
                        <div className='border rounded p-1 flex gap-1 text-gray-800'> <input type="checkbox" className='my-auto' /> Comment <div className='bg-green-500 w-3 rounded h-3 my-auto' /></div>
                        <div className='border rounded p-1 flex gap-1 text-gray-800'> <input type="checkbox" className='my-auto' /> Save <div className='bg-orange-500 w-3 rounded h-3 my-auto' /></div>
                    </div>
                    <Chart
                        options={kolInsight.options}
                        series={kolInsight.series}
                        type="line"
                        width="100%"
                        height="360"
                    />
                </Card>
            </section>
        </Layout>
    )
}
