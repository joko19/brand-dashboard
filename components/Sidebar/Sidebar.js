import { useRouter } from "next/router";
import Link from 'next/link'

function Sidebar() {
    const router = useRouter();
    const menu = [{
        name: 'Home Page',
        path: '/home'
    }, {
        name: 'Customer Database',
        path: '/customer-database'
    }, {
        name: 'Sales Report',
        path: '/sales-report'
    }, {
        name: 'Marketing Dashboard',
        path: '/marketing-dashboard'
    }, {
        name: 'KOL Dashboard',
        path: '/kol-dashboard'
    }, {
        name: 'Master Data',
        path: '/master-data'
    }]
    return (
        <div className="bg-red-500 fixed h-screen">
            <img src="/xeratic.png" alt="icon dashboard" className="hidden md:flex" />
            <ul className="px-4 inline-block w-60 md:inline-block hidden">
                {menu.map((item, index) => {
                    const isActive = router.pathname.indexOf(item.path) !== -1
                    return (
                        <Link href={item.path} key={index}>
                            <a className={` ${isActive ? 'bg-red-600 text-white shadow-lg font-bold border-2 border-white' : 'bg-white hover:bg-red-100'}  flex px-2 gap-4 mt-1 rounded-lg  inline-block block py-2 text-black-3 `}>
                                <span className="text-sm"> {item.name}</span>
                            </a>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar