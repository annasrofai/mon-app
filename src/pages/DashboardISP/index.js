import React from 'react'
import { logoMoniqq } from '../../assets';
import { useState } from "react";
import { Table } from 'flowbite-react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { useEffect } from 'react';
import TableTweet from './component/TableTweet';
import InputFilterTweet from './component/InputFilterTweet';
import SentimenSumCard from './component/SentimenSumCard';
import SentimenChartCard from './component/SentimenChartCard';
// import TableKata from './component/TableKata';



Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement);

const DashboardISP = () => {
    // untuk ubah title
    useEffect(() => {
        document.title = "MONIQQ - Dashboard ISP";
    }, []);
    // state untuk open sidebar
    const [openSidebars, setOpenSidebars] = useState(false);
    // contoh data donat
    const datadonut = {
        labels: [
            'Positif',
            'Negatif',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
                'rgba(0,200,132,0.8)',
                'rgba(255, 99, 132, 0.8)',
            ],
            hoverOffset: 4
        }]
    };
    // contoh data line
    const dataline = {
        labels: ["Jan", "Feb", "Mar", "Feb", "Mar", "Feb", "Mar", "Feb", "Mar"],
        datasets: [
            {
                label: "Positif",
                data: [33, 53, 85, 53, 85, 53, 85, 53, 85,],
                fill: false,
                backgroundColor: "rgba(0,200,132,0.8)",
                borderColor: "rgba(0,200,132,0.8)"
            },
            {
                label: "Negatif",
                data: [33, 25, 35, 25, 35, 25, 35, 25, 35,],
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 0.8)',
            }
        ]
    };
    const [filteredTweet, setFilteredTweet] = useState([])
    const [kataNegatif, setKataNegatif] = useState([])
    const [kataPositif, setKataPositif] = useState([])
    const [sentimenSum, setSentimenSum] = useState([])
    const [sentimenDaily, setSentimenDaily] = useState([])
    // contoh kolom
    const columns = [
        { accessor: 'name', label: 'Name' },
        { accessor: 'age', label: 'Age' },
        { accessor: 'is_manager', label: 'Manager', format: (value) => (value ? '✔️' : '✖️') },
        { accessor: 'start_date', label: 'Start Date' },
    ]

    // contoh data table tweet
    const rows = [
        { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
        { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
        { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
        { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
        { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
        { id: 6, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
        { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
        { id: 8, name: null, age: null, is_manager: null, start_date: null },
    ]
    const colKata = [
        { accessor: 'kata', label: 'Kata' },
        { accessor: 'frekuensi', label: 'Frekuensi' },
    ]

    const rowKataPositif = kataPositif
    const rowKataNegatif = kataNegatif

    const colTweet = [
        { accessor: 'created_date', label: 'Tanggal' },
        { accessor: 'username', label: 'Username' },
        { accessor: 'text', label: 'Tweet' },
        { accessor: 'sentimen', label: 'Sentimen' },
    ]

    const rowTweet = filteredTweet

    const colSentimen = [
        { accessor: 'created_date', label: 'Tanggal' },
        { accessor: 'sentimen_pos', label: 'Sentimen Positif' },
        { accessor: 'sentimen_neg', label: 'Sentimen Negatif' },
        { accessor: 'sentimen_sum', label: 'Jumlah Tweet/Hari' },
    ]

    const rowSentimen = sentimenDaily

    return (
        <div className="min-h-screen lg:flex">
            {/* sidebar */}

            <aside
                className={` ${openSidebars ? "translate-x-0 ease-in opacity-100" : "-translate-x-full ease-out opacity-0 "
                    } w-72 absolute inset-0 transform lg:transform-none lg:opacity-100 duration-200 lg:relative z-10 bg-white border text-white min-h-screen px-3`}

                aria-label="Sidebar"

            >
                <div className="flex h-16 justify-between">
                    <div className="flex p-3 flex-col items-center justify-center">
                        <img className="h-6 w-32" src={logoMoniqq} alt="" />
                    </div>
                    <button
                        className="p-2 focus:outline-none focus:bg-red-800 hover:bg-gray-200 rounded-md lg:hidden"
                        onClick={() => setOpenSidebars(!openSidebars)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800"
                >
                    <ul className="space-y-2">
                        <li className="border-b-2">
                            <div
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span className="ml-3 ">Quality of Experience</span>
                            </div>
                        </li>

                        <li>
                            <div

                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        clipRule="evenodd"
                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside >

            <div className="relative z-0 lg:flex-grow">
                <div className="flex flex-col gap-20">
                    {/* navbar */}
                    <header className="flex bg-blue-900 items-center px-3 h-16">
                        <button
                            className="p-2 focus:outline-none text-white focus:bg-gray-600 hover:bg-gray-600 rounded-md lg:hidden"
                            onClick={() => setOpenSidebars(!openSidebars)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <span className="block text-2xl font-semibold text-white p-4"
                        >Dashboard</span
                        >
                    </header>

                    {/* isine */}
                    <section className="mb-20 container">
                        {/* judul */}
                        <div
                            className="mx-auto text-left md:max-w-screen-lg lg:max-w-screen-lg"
                        >
                            <div className="flex flex-col p-3 mb-4">
                                <span className="font-semibold text-4xl ">
                                    Analisis Sentimen
                                </span>
                                <span className="font-normal text-md mt-4 w-full md:w-5/6">
                                    Halaman ini digunakan untuk melakukan analisis pendapat pengguna *ISP* (Quality of Experience) yang ada di sosial media Twitter.
                                </span>
                                <span className="font-normal text-md mt-4 w-full md:w-5/6">
                                    Langkah-langkah.
                                    <ol className="list-decimal p-3">
                                        <li>Silakan pilih periode pengambilan Tweet.</li>
                                        <li>Lihat hasil analisis pendapat pengguna di bagian bawah halaman.</li>
                                    </ol>
                                </span>
                            </div>
                        </div>
                        <div className='border w-full mb-14'></div>

                        <div className='text-2xl font-semibold p-3'>
                            Pilih Periode <span className='italic'>Tweet</span>
                        </div>
                        {/* input filter */}
                        <InputFilterTweet setFilteredTweet={setFilteredTweet} setSentimenSum={setSentimenSum} setSentimenDaily={setSentimenDaily} setKataNegatif={setKataNegatif} setKataPositif={setKataPositif} />

                        <div className='border w-full my-14'></div>
                        <div className='text-2xl p-3 font-semibold'>
                            Hasil Analisis
                        </div>
                        <div className='text-xl p-3 font-semibold'>
                            Jumlah Sentimen
                        </div>
                        {/* hasil tweet kecil=kecil */}
                        <SentimenSumCard sentimenSum={sentimenSum} />
                        <div className='w-full my-8'></div>
                        {/*  chart */}
                        <div className='text-xl p-3 font-semibold'>
                            Grafik
                        </div>
                        <SentimenChartCard sentimenDaily={sentimenDaily} sentimenSum={sentimenSum} />
                        <div className='w-full my-8'></div>
                        {/* tabel sentimen */}
                        <div className='text-xl p-3 font-semibold'>
                            Sentimen Harian
                        </div>
                        <div className='p-3'>
                            <TableTweet rows={rowSentimen} columns={colSentimen} />
                        </div>
                        <div className='w-full my-8'></div>
                        {/* tabel tweet*/}
                        <div className='text-xl p-3 font-semibold'>
                            Daftar Tweet
                        </div>
                        <div className='p-3'>
                            <TableTweet rows={rowTweet} columns={colTweet} />
                        </div>
                        <div className='w-full my-8'></div>

                        {/* tabel kata kata */}
                        <div className='text-xl p-3 font-semibold'>
                            Daftar Kata
                        </div>
                        <div className="flex flex-wrap mx-0 ">
                            <div className="w-full pb-5 pt-0  md:w-1/2 px-3 mb-6 md:mb-0">
                                <div className='text-lg py-3 font-medium'>
                                    Kata Positif
                                </div>
                                <TableTweet rows={rowKataPositif} columns={colKata} />
                            </div>
                            <div className="w-full pb-5 pt-0  md:w-1/2 px-3 mb-6 md:mb-0">
                                <div className='text-lg py-3 font-medium'>
                                    Kata Negatif
                                </div>
                                <TableTweet rows={rowKataNegatif} columns={colKata} />
                            </div>
                        </div>
                    </section>

                </div>
            </div >
        </div >
    )
}

export default DashboardISP