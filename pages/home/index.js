import Card from '../../components/Cards/Card'
import Layout from '../../Layout/Layout'
import { IoIosStats } from 'react-icons/io'
import { IoAlertSharp } from 'react-icons/io5'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

export default function Home() {
    return (
        <Layout>
            <section className='flex gap-4'>
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
        </Layout>
    )
}
