import React, { useRef, useCallback } from 'react'

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

    const refDonut = useRef(null);
    const downloadImageDonut = useCallback(() => {
        const link = document.createElement("a");
        link.download = "chart-donut.png"
        link.href = refDonut.current.toBase64Image();
        link.click();
    }, [])

    const refLine = useRef(null);
    const downloadImageLine = useCallback(() => {
        const link = document.createElement("a");
        link.download = "chart-line.png"
        link.href = refLine.current.toBase64Image();
        link.click();
    }, [])


    return (
        <div>
            <div className="flex mx-0 flex-row-reverse md:flex-row flex-wrap ">
                <div className="w-full pb-5 pt-0 md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className='text-lg py-3 font-medium flex justify-between items-center'>
                        <div>
                            Presentase
                        </div>
                        <div>
                            <button onClick={downloadImageDonut} type="button" className="focus:outline-none text-white
                             bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
                             text-xs px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Download
                            </button>
                        </div>
                    </div>
                    <div className='border h-96 p-4 rounded-lg flex  w-full items-center justify-center'>
                        <Doughnut ref={refDonut} data={datadonut} />
                    </div>
                </div>
                <div className="w-full pb-5 pt-0 md:w-2/3 px-3 mb-6 md:mb-0">
                    <div className='text-lg py-3 font-medium flex justify-between items-center'>
                        <div>
                            Tren
                        </div>
                        <div>
                            <button onClick={downloadImageLine} type="button" className="focus:outline-none text-white
                             bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
                             text-xs px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Download
                            </button>
                        </div>
                    </div>
                    <div className='border h-96 p-4 rounded-lg flex  w-full items-center justify-center'>
                        <Line ref={refLine} data={dataline} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SentimenChartCard