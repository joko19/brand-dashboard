import Layout from '../../Layout/Layout'
import { useState } from 'react'
import Card from '../../components/Cards/Card'
import { BiEdit } from 'react-icons/bi'
import { BsTrash, BsEye } from 'react-icons/bs'

export default function MasterData() {
    const tableHead = ['Produk', 'Price', 'Qty', 'Action']
    const [dataRaw] = useState([{
        nameProduct: "keyboard",
        price: "Rp.99.000",
        qty: 25,
    }, {
        nameProduct: "mouse",
        price: "Rp.99.000",
        qty: 44,
    }, {
        nameProduct: "monitor",
        price: "Rp.99.000",
        qty: 79,
    }, {
        nameProduct: "cable",
        price: "Rp.99.000",
        qty: 27,
    }, {
        nameProduct: "laptop",
        price: "Rp.99.000",
        qty: 58,
    },
    ])
    return (
        <Layout>
            <section className='px-4'>
                <div className='flex justify-between'>
                    <h1 className='text-red-500 font-bold text-3xl mb-4'>Product</h1>
                    <div>
                        <button className='flex bg-blue-500 inline-block p-2 text-white rounded hover:bg-blue-600'>Add Product</button>
                    </div>
                </div>
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
                                            {item.nameProduct}
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            {item.price}
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center">
                                            {item.qty}
                                        </td>
                                        <td className="px-6 h-12 whitespace-nowrap text-center flex">
                                            <div className='m-auto flex gap-2'>
                                                <BsEye color="green" className='cursor-pointer' size={16} />    <BiEdit color='blue' className='cursor-pointer' size={16} /> <BsTrash color='red' className='cursor-pointer' size={16} />

                                            </div>
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
