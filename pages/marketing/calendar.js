import Layout from '../../Layout/Layout'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Card from '../../components/Cards/Card';
import { ViewState, IntegratedEditing, EditingState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    WeekView,
    Appointments,
    AppointmentForm,
    MonthView
} from '@devexpress/dx-react-scheduler-material-ui';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { MdOutlineEventNote } from 'react-icons/md';

const currentDate = '2022-05-22';
const schedulerData = [
    { startDate: '2022-05-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
    { startDate: '2022-05-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

export default function MarketingDashboard() {
    const saveAppointment = () => {
        // save
    }

    return (
        <Layout>
            {/* Marketing Calendar */}
            <section className='px-4'>
                <h1 className='text-red-500 font-bold text-3xl mb-4'>Marketing Calendar</h1>
                <div className='flex flex-col md:flex-row gap-4'>
                    <Card className='w-full'>
                        <Scheduler
                            data={schedulerData}
                        >
                            <ViewState
                                currentDate={currentDate}
                            />
                            <EditingState onCommitChanges={saveAppointment} />
                            <IntegratedEditing />
                            <MonthView />
                            <Appointments />
                            <AppointmentForm />
                        </Scheduler>
                    </Card>
                    <Card className='w-full md:w-1/3'>
                        <div className='flex gap-2'>
                            <MdOutlineEventNote color='white' className='bg-red-500 rounded my-auto' size={16} />
                            <h1 className='font-bold text-xl '>Your Note</h1>
                        </div>
                        <div className='border-b flex mt-4 text-gray-700'>
                            <span className='w-full'>Date</span><span className='w-full'>Note</span>
                        </div>
                        <div className='flex mt-4 text-gray-700'>
                            <span className='w-full text-red-500'>19 Mei 2022</span><span className='w-full'>Lorem Ipsum</span>
                        </div>
                        <div className='flex mt-4 text-gray-700'>
                            <span className='w-full text-red-500'>25 Mei 2022</span><span className='w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                        </div>
                        <div className='flex mt-4 text-gray-700'>
                            <span className='w-full text-red-500'>30 Mei 2022</span><span className='w-full'>Lorem Ipsum is simply dummy text</span>
                        </div>
                    </Card>
                </div>
            </section>
        </Layout>
    )
}
