import React from 'react'

import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'





Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement);

const SentimenChartCard = ({ sentimenDaily, sentimenSum }) => {
    // contoh data donat
    const datadonut = {
        labels: [
            'Positif',
            'Negatif',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [sentimenSum.sentimen_pos_total, sentimenSum.sentimen_neg_total],
            backgroundColor: [
                'rgba(0,200,132,0.8)',
                'rgba(255, 99, 132, 0.8)',
            ],
            hoverOffset: 4
        }]
    };
    // contoh data line
    const dataline = {
        labels: sentimenDaily.map(s => s.created_date),
        datasets: [
            {
                label: "Positif",
                data: sentimenDaily.map(s => s.sentimen_pos),
                fill: false,
                backgroundColor: "rgba(0,200,132,0.8)",
                borderColor: "rgba(0,200,132,0.8)"
            },
            {
                label: "Negatif",
                data: sentimenDaily.map(s => s.sentimen_neg),
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 0.8)',
            }
        ]
    };
    return (
        <div>
            <div className="flex mx-0 flex-row-reverse md:flex-row flex-wrap ">
                <div className="w-full pb-5 pt-0 md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className='text-lg py-3 font-medium'>
                        Presentase Sentimen
                    </div>
                    <div className='border h-96 p-4 rounded-lg flex  w-full items-center justify-center'>
                        <Doughnut data={datadonut} />
                    </div>
                </div>
                <div className="w-full pb-5 pt-0 md:w-2/3 px-3 mb-6 md:mb-0">
                    <div className='text-lg py-3 font-medium'>
                        Tren Sentimen
                    </div>
                    <div className='border h-96 p-4 rounded-lg flex  w-full items-center justify-center'>
                        <Line data={dataline} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SentimenChartCard