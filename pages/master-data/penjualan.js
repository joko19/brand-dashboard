import Layout from '../../Layout/Layout'
import { useState } from 'react'
import Card from '../../components/Cards/Card'

export default function MasterData() {
    const tableHead = ['Tanggal', 'ID Order', 'Produk', 'Qty', 'Customer', 'Alamat', 'No HP', 'Kurir', 'Resi', 'Status Order']
    const [dataRaw] = useState([{
        nameProduct: "keyboard",
        price: "Rp.99.000",
        totalSold: 64,
    }, {
        nameProduct: "mouse",
        price: "Rp.99.000",
        totalSold: 64,
    }, {
        nameProduct: "monitor",
        price: "Rp.99.000",
        totalSold: 64,
    }, {
        nameProduct: "cable",
        price: "Rp.99.000",
        totalSold: 64,
    }, {
        nameProduct: "laptop",
        price: "Rp.99.000",
        totalSold: 64,
    },
    ])
    return (
        <Layout>
            <section className='px-4'>
                <h1 className='text-red-500 font-bold text-3xl mb-4'>Penjualan</h1>
                <Card>
                    <div className='overflow-auto'>
                        <table className="table md:min-w-full overflow-auto divide-y divide-gray-200 text-sm">
                            <thead className="text-gray-500" >
                                {tableHead.map((value, index) => (
                                    <th scope="col" className="px-6 h-12 tracking-wider" key={index}>
                                        {value}
                                    </th>
                                ))}
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                                {dataRaw.map((item, index) => (
                                    <tr key={index} className="h-12 hover:bg-gray-100">
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            12/04/22
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            17
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            {item.nameProduct}
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            99
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            {item.nameProduct}
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            Jawa Timur
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            08578994514
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            JNE
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            NV-12d
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            proses
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table >
                    </div>
                </Card>
            </section>
        </Layout>
    )
}
