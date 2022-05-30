import { useState } from 'react'
import Card from '../components/Cards/Card'
import Layout from '../Layout/Layout'
import { IoIosStats } from 'react-icons/io'
import { IoAlertSharp, IoLocation } from 'react-icons/io5'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), { ssr: false });
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Home() {
    const [productSoldDonut, setproductSoldDonut] = useState({
        options: {
            legend: false
        },
        series: [77, 23],
    })
    return (
        <Layout>
            <section className='flex flex-col md:flex-row gap-4 px-4'>
                <Card className='w-full'>
                    <div className='flex gap-2'>
                        <IoIosStats color='white' className='bg-red-500 rounded' size={16} />
                        <h1>Total Pembeli</h1>
                        <IoAlertSharp color='white' className='bg-red-500 rounded-full my-auto' size={12} />
                    </div>
                    <p className='text-gray-800 text-xl'>5,266 Pelanggan<span className='text-red-500 mx-1 bg-red-100 p-1 font-bold rounded-full text-xs'>-5%</span></p>
                    <p className='text-gray-400 text-xs flex'><FaCaretDown color='red' /> 6 Pelanggan dari periode 12 belas bulan sebelumnya</p>
                </Card>
                <Card className='w-full'>
                    <div className='flex gap-2'>
                        <IoIosStats color='white' className='bg-red-500 rounded' size={16} />
                        <h1>Penjualan per Pembeli</h1>
                        <IoAlertSharp color='white' className='bg-red-500 rounded-full my-auto' size={12} />
                    </div>
                    <p className='text-gray-800 text-xl'>Rp.1.500.000 / Pelanggan<span className='text-green-500 mx-1 bg-green-100 p-1 font-bold rounded-full text-xs'>+8%</span></p>
                    <p className='text-gray-400 text-xs flex'><FaCaretUp color='green' />Rp.900,000 dari periode 12 belas bulan sebelumnya</p>
                </Card>
                <Card className='w-full'>
                    <div className='flex gap-2'>
                        <IoIosStats color='white' className='bg-red-500 rounded' size={16} />
                        <h1>Pesanan per Pembeli</h1>
                        <IoAlertSharp color='white' className='bg-red-500 rounded-full my-auto' size={12} />
                    </div>
                    <p className='text-gray-800 text-xl'>7 / Pelanggan <span className='text-green-500 mx-1 bg-green-100 p-1 font-bold rounded-full text-xs'>+4%</span></p>
                    <p className='text-gray-400 text-xs flex'><FaCaretUp color='green' />9 dari periode 12 belas bulan sebelumnya</p>
                </Card>
            </section>
            <div className='my-4' />
            <section className='flex flex-col md:flex-row gap-4 px-4'>
                <Card className='w-full md:w-1/3'>
                    <div className='flex gap-2'>
                        <IoAlertSharp color='white' className='bg-red-500 rounded' size={16} />
                        <h1>Pembeli baru vs Pembeli lama</h1>
                        <IoAlertSharp color='white' className='bg-red-500 rounded-full my-auto' size={12} />
                    </div>
                    <div className='my-auto'>
                        <Chart options={productSoldDonut.options} series={productSoldDonut.series} type="donut" width="100%" />
                    </div>
                </Card>
                <Card className='w-full'>
                    <div className='flex gap-2'>
                        <IoLocation color='white' className='bg-red-500 rounded' size={16} />
                        <h1>Geolokasi Pelanggan</h1>
                        <IoAlertSharp color='white' className='bg-red-500 rounded-full my-auto' size={12} />
                    </div>
                    <MapWithNoSSR />
                </Card>
            </section>
        </Layout>
    )
}
