import Card from '../components/Cards/Card'
import Layout from '../Layout/Layout'
import { IoIosStats } from 'react-icons/io'
import { IoAlertSharp } from 'react-icons/io5'

export default function Home() {
    return (
        <Layout>
            <section className='flex'>
                <Card className='w-full'>
                    <div className='flex gap-2'>
                        <IoIosStats color='white' className='bg-red-500 rounded' size={16} />
                        <h1 className='font-bold'>Average Revenue</h1>
                        <IoAlertSharp color='white' className='bg-red-500 rounded-full' size={16} />
                    </div>
                </Card>
                <Card>

                </Card>
            </section>
        </Layout>
    )
}
