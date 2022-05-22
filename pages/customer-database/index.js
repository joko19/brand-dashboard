import Layout from '../../Layout/Layout'

export default function CustomerDatabase() {
    return (
        <Layout>
            <section>
                <h1 className='text-red-500 mb-4 font-bold text-3xl'>Customer Performance</h1>
                <div className='flex gap-2'>
                    <div className='cursor-pointer bg-red-500 text-white rounded-lg font-bold p-2'>Customer</div>
                    <div className='cursor-pointer text-red-500 font-bold border border-red-500 rounded-lg p-2'>Order</div>
                    <div className='cursor-pointer text-red-500 font-bold border border-red-500 rounded-lg p-2'>Product Sold</div>
                    <div className='cursor-pointer text-red-500 font-bold border border-red-500 rounded-lg p-2'>Sales</div>
                </div>
            </section>
        </Layout>
    )
}
