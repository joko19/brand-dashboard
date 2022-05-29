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
        </Layout>
    )
}
