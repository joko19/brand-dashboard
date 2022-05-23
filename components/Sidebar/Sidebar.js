import { useRouter } from "next/router";
import Link from 'next/link'
import { AiFillHome,AiFillDatabase,AiOutlineUsergroupAdd } from 'react-icons/ai'
import {IoStatsChart} from 'react-icons/io5'
import {MdOutlinePriceCheck, MdOutlineDateRange} from 'react-icons/md'

function Sidebar() {
    const router = useRouter();
    const menu = [{
        name: 'Home Page',
        path: '/home',
        icon: <AiFillHome color='white' />
    }, {
        name: 'Customer Database',
        path: '/customer-database',
        icon: <AiOutlineUsergroupAdd color='white' />
    }, {
        name: 'Sales Report',
        path: '/sales-report',
        icon: <MdOutlinePriceCheck color='white' />
    }, {
        name: 'Marketing Dashboard',
        path: '/marketing-dashboard',
        icon: <MdOutlineDateRange color='white' />
    }, {
        name: 'KOL Dashboard',
        path: '/kol-dashboard',
        icon: <IoStatsChart color='white' />
    }, {
        name: 'Master Data',
        path: '/master-data',
        icon: <AiFillDatabase color='white' />
    }]
    return (
        <div className="bg-red-500 fixed h-screen">
            <img src="/xeratic.png" alt="icon dashboard" className="hidden md:flex" />
            <ul className="px-4 inline-block w-60 md:inline-block hidden">
                {menu.map((item, index) => {
                    const isActive = router.pathname.indexOf(item.path) !== -1
                    return (
                        <Link href={item.path} key={index}>
                            <a className={` ${isActive ? 'text-white border-l shadow-lg font-bold' : ' text-white'}  flex px-2 gap-4 mt-1 inline-block block py-2 text-black-3 `}>
                                {item.icon}   <span className="text-sm"> {item.name}</span>
                            </a>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar