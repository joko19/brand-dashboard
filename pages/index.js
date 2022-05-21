import Card from '../components/Cards/Card'
import Layout from '../Layout/Layout'
import { IoIosStats } from 'react-icons/io'
import { IoAlertSharp } from 'react-icons/io5'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        window.location.href = '/home'
    }, [])
    return (
        <div className='text-center my-12'>Loading...</div>
    )
}
