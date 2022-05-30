import Layout from '../../Layout/Layout'
import { useState } from 'react'
import Card from '../../components/Cards/Card'
import { BiEdit } from 'react-icons/bi'
import { BsTrash, BsEye } from 'react-icons/bs'
import CustomModal from '../../components/Modal/CustomModal'
import { IoIosPricetags } from 'react-icons/io'
import { RiCompassLine } from 'react-icons/ri'

export default function MasterData() {
    const tableHead = ['Produk', 'Price', 'Qty', 'Action']
    const [showAddModal, setShowAddModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
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
                        <button className='flex bg-blue-500 inline-block p-2 text-white rounded hover:bg-blue-600' onClick={() => setShowAddModal(true)}>Add Product</button>
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
                                                <BsEye color="green" className='cursor-pointer' size={16} onClick={() => setShowViewModal(true)} />
                                                <BiEdit color='blue' className='cursor-pointer' size={16} onClick={() => {
                                                    setShowEditModal(true)
                                                }} />
                                                <BsTrash color='red' className='cursor-pointer' size={16} onClick={() => setShowDeleteModal(true)} />

                                            </div>
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
                            <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="Ex. Mouse, Keyboard" />
                        </div>
                        <div>
                        </div>
                        <div className='mt-2'>
                            <label className='text-gray-500 text-sm'>Price</label>
                            <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="Ex. 90.000" />
                        </div>
                        <div className='mt-2'>
                            <label className='text-gray-500 text-sm'>Total/Quantity</label>
                            <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="Ex. 76" />
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

            <CustomModal visible={showViewModal} onClose={() => setShowViewModal(false)}>
                <div className="bg-white w-96 p-5 rounded">
                    <div>
                        <img src="https://vibegaming.com.bd/wp-content/uploads/2021/10/redmi-01-500x500-1.jpg" className='w-32 mx-auto' />
                        <div className='text-gray-500 font-bold text-xl text-center'>
                            Lorem Ipsum
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex w-full gap-2 border p-2 rounded'>
                                <IoIosPricetags className='my-auto' color='red' /> Rp.99.000
                            </div>
                            <div className='flex w-full gap-2 border p-2 rounded'>
                                <RiCompassLine color='red' className="my-auto" /> 78 item
                            </div>
                        </div>

                        <div className='flex flex-row-reverse gap-4 mt-4'>
                            <div className='p-2 rounded cursor-pointer text-white bg-red-500 hover:bg-red-600' onClick={() => setShowViewModal(false)}>
                                Close
                            </div>
                        </div>
                    </div>
                </div>
            </CustomModal>
            <CustomModal visible={showEditModal} onClose={() => setShowEditModal(false)}>
                <div className="bg-white w-96 p-5 rounded">
                    <h1 className="font-bold text-2xl text-blue-500">
                        Edit Product
                    </h1>
                    <form>
                        <div>
                            <label className='text-gray-500 text-sm'>Name Product</label>
                            <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="Ex. Mouse, Keyboard" />
                        </div>
                        <div>
                        </div>
                        <div className='mt-2'>
                            <label className='text-gray-500 text-sm'>Price</label>
                            <input type="text" className="w-full form border mt-1 p-2 rounded    " placeholder="Ex. 90.000" />
                        </div>
                        <div className='mt-2'>
                            <label className='text-gray-500 text-sm'>Total/Quantity</label>
                            <input type="text" className="w-full form border mt-1 p-2 rounded" placeholder="Ex. 76" />
                        </div>
                        <div className='flex flex-row-reverse gap-4 mt-4'>
                            <button className='bg-blue-500 p-2 text-white rounded cursor-pointer hover:bg-blue-600' onClick={() => setShowEditModal(false)}>
                                Save
                            </button>
                            <div className='p-2 rounded cursor-pointer text-gray-700 bg-gray-200 hover:bg-gray-300' onClick={() => setShowEditModal(false)}>
                                Cancel
                            </div>
                        </div>
                    </form>
                </div>
            </CustomModal>
            <CustomModal visible={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
                <div className="bg-white w-96 p-5 rounded">
                    <h1 className="font-bold text-2xl text-red-500">
                        Confirmation
                    </h1>
                    <p className="py-1 text-gray-500">
                        Are you sure to delete this product?
                    </p>
                    <div className='flex flex-row-reverse text-white gap-4 mt-4'>
                        <div className='bg-red-500 p-2 rounded cursor-pointer hover:bg-red-600' onClick={() => setShowDeleteModal(false)}>
                            Yes
                        </div>
                        <div className='bg-blue-500 p-2 rounded cursor-pointer hover:bg-blue-600' onClick={() => setShowDeleteModal(false)}>
                            Cancel
                        </div>
                    </div>
                </div>
            </CustomModal>
        </Layout>
    )
}
