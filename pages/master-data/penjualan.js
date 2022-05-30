import Layout from '../../Layout/Layout'
import { useState } from 'react'
import Card from '../../components/Cards/Card'
import CustomModal from '../../components/Modal/CustomModal'

export default function MasterData() {
    const [showAddModal, setShowAddModal] = useState(false);
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
                <div className='flex flex-col md:flex-row justify-between mb-4'>
                    <h1 className='text-red-500 font-bold text-3xl mb-4'>Penjualan</h1>
                    <div className='flex gap-2'>
                        <div>
                            <button className='flex bg-blue-500 inline-block p-2 text-white rounded hover:bg-blue-600 text-xs md:text-lg' onClick={() => setShowAddModal(true)}>Tambah Penjualan</button>
                        </div>
                        <div>

                            <label htmlFor="excel" className='flex bg-green-500 inline-block p-2 text-white rounded hover:bg-green-600 cursor-pointer text-xs md:text-lg'>Import Excel</label>
                            <input type="file" id='excel' className='flex hidden bg-green-500 inline-block p-2 text-white rounded hover:bg-green-600' />
                        </div>
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
            <CustomModal visible={showAddModal} onClose={() => setShowAddModal(false)}>
                <div className="bg-white w-96 p-5 rounded">
                    <h1 className="font-bold text-2xl text-blue-500">
                        Add Product
                    </h1>
                    <form>
                        <div>
                            <label className='text-gray-500 text-sm'>Name Product</label>
                            <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="input name product" />
                        </div>
                        <div>
                        </div>
                        <div className='mt-2'>
                            <label className='text-gray-500 text-sm'>Qty</label>
                            <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="input total item" />
                        </div>
                        <div className='mt-2'>
                            <label className='text-gray-500 text-sm'>Customer</label>
                            <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="input name customer" />
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 text-sm'>Address</label>
                                <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="input address destination" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 text-sm'>Phone</label>
                                <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="input phone number" />
                            </div>
                        </div>
                        <div className='flex flex-row-reverse gap-4 mt-4'>
                            <button className='bg-blue-500 p-2 text-white rounded cursor-pointer hover:bg-blue-600' onClick={() => setShowAddModal(false)}>
                                Save
                            </button>
                            <div className='p-2 rounded cursor-pointer text-gray-700 bg-gray-200 hover:bg-gray-300' onClick={() => setShowAddModal(false)}>
                                Cancel
                            </div>
                        </div>
                    </form>
                </div>
            </CustomModal>
        </Layout>
    )
}
