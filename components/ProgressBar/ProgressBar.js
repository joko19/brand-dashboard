import React from "react";

export default function ProgressBar({ percentage = 0}) {
    return (
        <div className='h-2 rounded w-full bg-gray-300 my-2'>
            <div
                style={{ width: `${percentage}%` }}
                className={`h-full ${percentage < 70 ? 'bg-red-600' : 'bg-green-600'} rounded`}>
            </div>
        </div>
    )
}