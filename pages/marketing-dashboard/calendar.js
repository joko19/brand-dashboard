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
                <Scheduler
                    data={schedulerData}
                >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <EditingState onCommitChanges={saveAppointment}/>
                    <IntegratedEditing/>
                    <MonthView />
                    <Appointments />
                    <AppointmentForm/>
                </Scheduler>
            </section>
        </Layout>
    )
}
