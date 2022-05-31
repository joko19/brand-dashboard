import { useState } from 'react'
import Card from '../components/Cards/Card'
import Layout from '../Layout/Layout'
import { IoIosStats } from 'react-icons/io'
import { IoAlertSharp, IoLocation } from 'react-icons/io5'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import CustomModal from '../components/Modal/CustomModal'
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), { ssr: false });
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Home() {
    const [showAddModal, setShowAddModal] = useState(false)
    const [productSoldDonut, setproductSoldDonut] = useState({
        options: {
            legend: false
        },
        series: [77, 23],
    })
    return (
        <Layout>
            <div className='flex justify-between px-4'>
                <h1 className='text-red-500 font-bold text-3xl mb-4'>Customer Database</h1>
                <div>
                    <button className='flex bg-blue-500 inline-block p-2 text-white rounded hover:bg-blue-600' onClick={() => setShowAddModal(true)}>Add Data</button>
                </div>
            </div>
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
            <CustomModal visible={showAddModal} onClose={() => setShowAddModal(false)}>
                <div className="bg-white w-96 p-5 rounded">
                    <h1 className="font-bold text-2xl text-blue-500">
                        Add Data for this Month
                    </h1>
                    <form>
                        <div>
                            <label className='text-gray-500 text-sm'>Total Pembeli</label>
                            <input type="number" className="w-full form border mt-1 p-2 rounded" placeholder="Total pembeli bulan ini" />
                        </div>
                        <div>
                        </div>
                        <div className='mt-2'>
                            <label className='text-gray-500 text-sm'>Penjualan per Pembeli</label>
                            <input type="number" className="w-full form border mt-1 p-2 rounded" placeholder="total penjualan/pembeli dalam bulan ini" />
                        </div>
                        <div className='mt-2'>
                            <label className='text-gray-500 text-sm'>Pesanan per Pembeli</label>
                            <input type="number" className="w-full form border mt-1 p-2 rounded" placeholder="Total pesanan/pembeli dalam bulan ini" />
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
