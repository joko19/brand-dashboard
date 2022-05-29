import { useRouter } from "next/router";
import Link from 'next/link'
import { AiFillHome, AiFillDatabase, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { IoStatsChart } from 'react-icons/io5'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { MdOutlinePriceCheck, MdOutlineDateRange } from 'react-icons/md'
import { useState } from "react";

function Sidebar() {
    const [subSales, setSubSales] = useState(false)
    const [subMarketing, setSubMarketing] = useState(false)
    const [subKol, setSubKol] = useState(false)
    const [subData, setSubData] = useState(false)
    const router = useRouter();
    const menu = [{
        name: 'Home Page',
        path: '/home',
        icon: <AiFillHome color='white' />,
        subMenu: []
    }, {
        name: 'Customer Database',
        path: '/customer-database',
        icon: <AiOutlineUsergroupAdd color='white' />,
        subMenu: []
    }, {
        name: 'Sales Report',
        path: '/sales-report',
        icon: <MdOutlinePriceCheck color='white' />,
        subMenu: [
            {
                name: 'Product Performance',
                path: '/sales-report/product-performance'
            },
            {
                name: 'Sales Channel',
                path: '/sales-report/channel'
            },
        ]
    }, {
        name: 'Marketing Dashboard',
        path: '/marketing-dashboard',
        icon: <MdOutlineDateRange color='white' />,
        subMenu: [
            {
                name: 'Marketing Performance',
                path: '/marketing-dashboard/performance'
            },
            {
                name: 'Marketing Calendar',
                path: '/marketing-dashboard/calendar'
            },
        ]
    }, {
        name: 'KOL Dashboard',
        path: '/kol-dashboard',
        icon: <IoStatsChart color='white' />,
        subMenu: [
            {
                name: 'Campaign Performance',
                path: '/kol-dashboard/campaign-performance'
            },
            {
                name: 'KOL Insight',
                path: '/kol-dashboard/insight'
            },
        ]
    }, {
        name: 'Master Data',
        path: '/master-data',
        icon: <AiFillDatabase color='white' />,
        subMenu: [
            {
                name: 'Data Prouct',
                path: '/master-data/product'
            },
            {
                name: 'Data Penjualan',
                path: '/master-data/penjualan'
            },
        ]
    }]
    return (
        <div className="bg-red-500 fixed h-screen">
            <img src="/xeratic.png" alt="icon dashboard" className="hidden md:flex" />
            <ul className="px-4 inline-block w-60 md:inline-block hidden">
                {menu.map((item, index) => {
                    const isActive = router.pathname.indexOf(item.path) !== -1
                    const [isSubmenuActive, setSubmenuActive] = useState(false)
                    return (
                        <div className={`${isSubmenuActive && 'bg-red-600 rounded-lg py-1'}`} key={index}>
                            <div className={`${isActive ? 'text-white bg-red-400 shadow-lg' : ' text-white'} flex justify-between px-2`}>
                                <Link href={item.path} >
                                    <a className={`flex gap-4 mt-1 inline-block block py-2 text-black-3 `}>
                                        {item.icon}   <span className="text-sm"> {item.name}</span>
                                    </a>
                                </Link>
                                {item.subMenu.length > 0 && (
                                    <div className="flex my-auto">
                                        {!isSubmenuActive ? <IoIosArrowDown color='white' onClick={() => setSubmenuActive(true)} className='cursor-pointer' /> : <IoIosArrowUp color='white' onClick={() => setSubmenuActive(false)} className='cursor-pointer' />}
                                    </div>
                                )}
                            </div>
                            {isSubmenuActive && (
                                <>
                                    {item.subMenu.map((itemSubMenu, indexS) => (
                                        <Link href={itemSubMenu.path} key={indexS}>
                                            <a className={`flex gap-4 inline-block block py-1 text-white pl-10`}>
                                                <span className="text-sm"> {itemSubMenu.name}</span>
                                            </a>
                                        </Link>
                                    ))}
                                </>

                            )}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar