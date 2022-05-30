import { useRouter } from "next/router";
import Link from 'next/link'
import { AiOutlinePercentage, AiOutlineHome, AiOutlineShoppingCart, AiFillDatabase } from 'react-icons/ai'
import { IoStatsChart, IoShareSocial } from 'react-icons/io5'
import { FiCalendar } from 'react-icons/fi'
import { HiOutlineUsers } from 'react-icons/hi'
import { MdOutlinePriceCheck, MdOutlineInsights, MdShoppingCart, MdMenu } from 'react-icons/md'
import { useState } from "react";

function Sidebar() {
    const router = useRouter();
    const path = router.asPath
    const [activeSidebar, setActiveSidebar] = useState(false)
    return (
        <>
            {/* <div className="flex bg-red-500 fixed w-screen p-2 md:hidden z-20 gap-2">
                <MdMenu color="white" className="my-auto" onClick={() => setActiveSidebar(!activeSidebar)} /> <span className="text-white"> Dashboard</span>
            </div> */}
            <div className={`bg-red-500 fixed min-h-screen z-10 overflow-y-auto`}>
                <img src="/xeratic.png" alt="icon dashboard" className="md:flex hidden w-full w-32 py-4 ml-6" />
                <ul className="px-4 inline-block w-60 md:inline-block hidden">
                    <div className={`${path === '/home' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/home' >
                            <a className={`flex gap-4 mt-1 inline-block block py-2 text-black-3 `}>
                                <AiOutlineHome color='white' />   <span className="text-sm"> Home Page</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${path === '/customer-database' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/customer-database' >
                            <a className={`flex gap-4 mt-1 inline-block block py-2 text-black-3 `}> <HiOutlineUsers color="white" /><span className="text-sm"> CustomerDatabase</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`text-white p-2 mt-1 font-bold`}>
                        Sales Report
                    </div>
                    <div className={`${path === '/sales-report/product-performance' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/sales-report/product-performance' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <MdOutlinePriceCheck color='white' />     <span className="text-sm"> Product Performance</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${path === '/sales-report/channel' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/sales-report/channel' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <MdOutlineInsights color='white' /><span className="text-sm"> Sales Channel</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`text-white p-2 mt-1 font-bold`}>
                        Marketing Dashboard
                    </div>
                    <div className={`${path === '/marketing/performance' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/marketing/performance' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <AiOutlinePercentage color='white' />  <span className="text-sm"> Performance</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${path === '/marketing/calendar' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/marketing/calendar' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <FiCalendar color='white' /><span className="text-sm">Calendar</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`text-white p-2 mt-1 font-bold`}>
                        KOL Dashboard
                    </div>
                    <div className={`${path === '/kol-dashboard/campaign-performance' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/kol-dashboard/campaign-performance' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <IoShareSocial color='white' />   <span className="text-sm"> Campaign Performance</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${path === '/kol-dashboard/insight' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/kol-dashboard/insight' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <IoStatsChart color="white" /> <span className="text-sm"> KOL Insight</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`text-white p-2 mt-1 font-bold`}>
                        Master Data
                    </div>
                    <div className={`${path === '/master-data/product' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/master-data/product' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <AiFillDatabase color='white' />   <span className="text-sm"> Product</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`${path === '/master-data/penjualan' ? 'text-white bg-red-400 shadow-lg rounded-r border-l' : ' text-white'} flex justify-between px-2`}>
                        <Link href='/master-data/penjualan' >
                            <a className={`flex gap-4 mt-1 inline-block block py-1 text-black-3 `}>
                                <MdShoppingCart color="white" /> <span className="text-sm"> Penjualan</span>
                            </a>
                        </Link>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Sidebar