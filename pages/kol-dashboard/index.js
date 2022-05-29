import Card from '../../components/Cards/Card'
import Layout from '../../Layout/Layout'
import { IoPerson, IoArrowDownOutline, IoArrowUpOutline } from 'react-icons/io5'
import { AiFillPicture } from 'react-icons/ai'
import { BsLightningChargeFill, BsFillBookmarkFill } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import { FaCommentDots } from 'react-icons/fa'
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
            {/* KOL Performance */}
            <section className='px-4'>
                <h1 className='text-red-500 font-bold text-3xl mb-4'>Campaign Performance</h1>
                <div className='flex flex-wrap mx-auto gap-2'>
                    <Card className='w-40'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p>Follower</p>
                                <p className='text-2xl font-bold'>245,000</p>
                                <p className='text-green-500 flex'>+1,900   <IoArrowUpOutline color='green' size={16} className='flex' /> (+5%)</p>
                            </div>
                            <IoPerson color='purple' size={24} className='flex' />
                        </div>
                    </Card>
                    <Card className='w-40'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p>Post</p>
                                <p className='text-2xl font-bold'>150</p>
                                <p className='text-green-500 flex'>+50   <IoArrowUpOutline color='green' size={16} className='flex' /> (+9%)</p>
                            </div>
                            <AiFillPicture color='blue' size={24} className='flex' />
                        </div>
                    </Card>
                    <Card className='w-40'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p>Reach</p>
                                <p className='text-2xl font-bold'>200,000</p>
                                <p className='text-red-500 flex'>-30   <IoArrowDownOutline color='red' size={16} className='flex' /> (-5%)</p>
                            </div>
                            <BsLightningChargeFill color='yellow' size={24} className='flex' />
                        </div>
                    </Card>
                    <Card className='w-40'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p>Like</p>
                                <p className='text-2xl font-bold'>350,020</p>
                                <p className='text-green-500 flex'>+1,700   <IoArrowUpOutline color='green' size={16} className='flex' /> (+8%)</p>
                            </div>
                            <FcLike color='red' size={24} className='flex' />
                        </div>
                    </Card>
                    <Card className='w-40'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p>Comment</p>
                                <p className='text-2xl font-bold'>1,231</p>
                                <p className='text-green-500 flex'>+900   <IoArrowUpOutline color='green' size={16} className='flex' /> (+25%)</p>
                            </div>
                            <FaCommentDots color='green' size={24} className='flex' />
                        </div>
                    </Card>
                    <Card className='w-40'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p>Save</p>
                                <p className='text-2xl font-bold'>500</p>
                                <p className='text-green-500 flex'>+40   <IoArrowUpOutline color='green' size={16} className='flex' /> (+45%)</p>
                            </div>
                            <BsFillBookmarkFill color='orange' size={24} className='flex' />
                        </div>
                    </Card>
                </div>
            </section>
            <div className='my-4' />
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
