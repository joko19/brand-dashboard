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
        <div className="py-16 bg-red-100 fixed h-screen">
            <ul className="px-4 inline-block w-60 md:inline-block hidden">
                {menu.map((item, index) => {
                    const isActive = router.pathname.indexOf(item.path) !== -1
                    console.log(isActive)
                    
                    return (
                        <li key={index} className={` ${isActive ? 'bg-red-500 text-white shadow-lg' : 'bg-white'} flex px-2 gap-4 mt-1 rounded-lg  inline-block block py-2 text-black-3 `}>
                            <Link href={item.path}>
                                <a className="flex gap-4 inline-block cursor-pointer p-1 rounded">
                                    <span className="text-sm"> {item.name}</span>
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar