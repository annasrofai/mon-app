import React, { useEffect, useState } from 'react'
import { Navbar, Button, Flowbite, DarkThemeToggle } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq } from '../../assets'

import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import InputFilterTweetHome from './component/InputFilterTweetHome';
import SentimenChartCardHome from './component/SentimenChartCardHome';
Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);


const BelajarQOS = () => {
    useEffect(() => {
        document.title = "Belajar Internet - MONIQQ";
    }, []);
    const [filteredTweet, setFilteredTweet] = useState([])

    const [sentimenSum, setSentimenSum] = useState([])
    const [sentimenDaily, setSentimenDaily] = useState([])

    const labels = ['Person1', 'Person2', 'Person3'];
    const databarmulti = {
        labels,
        datasets: [
            {
                label: 'Maximal',
                data: [18, 23, 25,],
                backgroundColor: 'rgba(53, 90, 232, 0.5)',
            },
            {
                label: 'Minimal',
                data: [15, 12, 12],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Rata-Rata',
                data: [17, 18, 18],
                backgroundColor: 'rgba(53, 162, 200, 0.5)',
            },

        ],

    };
    return (
        <div className='flex flex-col div dark:bg-gray-900  '>
            <header className="container p-0">
                <Navbar
                    fluid={true}
                    rounded={true}

                >
                    <div>
                        <Link to="/">
                            <img
                                src={logoMoniqq}
                                className="mr-3 h-5 w-24 "
                                alt="Flowbite Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex md:order-2 gap-2">
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                        {/* <Flowbite>
                            <DarkThemeToggle />
                        </Flowbite>
                        <Navbar.Toggle /> */}

                    </div>
                    <Navbar.Collapse>
                        <ul
                            className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <Link to='/'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Home
                                    </div>
                                </li>
                            </Link>
                            <Link to='/belajarqos'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Belajar Internet
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>

            </header>

            <div className='container flex flex-col items-center justify-center mt-16'>
                <div className='w-full md:w-3/4 flex flex-col '>
                    <div>
                        <h4 className='text-3xl font-bold my-5 dark:text-green-100'>Kualitas Koneksi Internet</h4>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Anda sebagai pengguna internet rumahan pasti menginginkan kualitas koneksi yang
                            <span className='font-semibold'> cepat</span>,
                            <span className='font-semibold'> andal</span>, dan
                            <span className='font-semibold'> konsisten</span>.
                        </p>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Setiap orang pasti menginginkan pengalaman menggunakan internet (<i>browsing</i>, <i>gaming</i>, dan <i>streaming</i>) yang
                            <span className='font-semibold'> menyenangkan </span>
                            (optimal).
                        </p>
                    </div>
                    <div>
                        <h6 className='text-lg font-bold mb-5'>Bagaimana Cara Untuk Mengukur Kualitas Koneksi Internet?</h6>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Performa atau kualitas koneksi internet rumahan (<i>Quality of Service</i>) dapat diukur dengan beberapa parameter, seperti
                            <span className='font-semibold italic'> Throughput</span>,
                            <span className='font-semibold italic'> Delay/Latency</span>,
                            <span className='font-semibold italic'> Jitter</span>, dan
                            <span className='font-semibold italic'> Packet Loss</span>.

                        </p>
                        <ul className="list-disc mx-5 mb-16">
                            <li className='mb-2'>
                                <span className='italic'>Throughput </span>dan<span className='italic'> Delay/Latency </span> digunakan untuk mengukur <span className=' font-semibold '> “kecepatan”</span>.
                            </li>
                            <li className='mb-2'>
                                <span className='italic'>Packet Loss </span>digunakan untuk mengukur<span className=' font-semibold '> "keandalan”</span>.
                            </li>
                            <li className='mb-2'>
                                <span className='italic'>Jitter </span> digunakan untuk mengukur <span className=' font-semibold '> "konsistensi”</span>.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex flex-wrap mx-0 ">
                            <div className="w-full p-3 md:w-1/2  mb-6 md:mb-0">
                                <Link to="/belajarqos/throughput">
                                    <div className="mb-6 max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="fill-current text-white inline-block h-10 w-10 p-2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Throughput</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Apa itu Throughput? Apa itu Bandwidth? Apa pengaruhnya? Berapa nilai idealnya?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-3 md:w-1/2  mb-6 md:mb-0">
                                <Link to="/belajarqos/delay">
                                    <div className="mb-6 max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="text-white inline-block h-10 w-10 p-2" strokeWidth="2" stroke="currentColor" fill="none"
                                                    height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                                    />
                                                </svg>

                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Delay</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Apa itu Delay/Latency? Apa pengaruhnya? Berapa nilai idealnya?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-0 ">
                            <div className="w-full p-3 md:w-1/2  mb-6 md:mb-0">
                                <Link to="/belajarqos/jitter">
                                    <div className="mb-6 max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="text-white inline-block h-10 w-10 p-2" strokeWidth="2" stroke="currentColor" fill="none"
                                                    height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Jitter</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Apa itu Jitter? Apa pengaruhnya? Berapa nilai idealnya?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full p-3 md:w-1/2  mb-2 md:mb-0">
                                <Link to="/belajarqos/packetloss">
                                    <div className="mb-6 max-w-sm rounded-lg border border-gray-200 bg-white shadow-lg transform transition duration-500 hover:scale-110">
                                        <div className="flex  items-center relative mb-10">
                                            <div className="border-t border-gray-200 z-20 w-full"></div>
                                            <div className="rounded-full bg-blue-400 z-30 p-2 inline-block absolute mx-8">
                                                <svg className="text-white inline-block h-10 w-10 p-2" strokeWidth="2" stroke="currentColor" fill="none"
                                                    height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-8 pb-4">
                                            <h2 className="text-gray-800 text-xl font-bold mb-1">Packet Loss</h2>
                                            <p className="text-gray-600 text-xs mb-2">
                                                Apa itu Packet Loss? Apa pengaruhnya? Berapa nilai idealnya?
                                            </p>
                                            <div className="text-right">
                                                <p className="text-blue-600 underline text-xs">
                                                    lihat selengkapnya
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-base font-regular mt-8 mb-6 leading-relaxed text-gray-700'>
                            Selain dari kualitas teknis jaringan Penyedia Jasa Internet (ISP),
                            luaran dari parameter-parameter QoS ini juga tergantung pada faktor non-teknis, yaitu <strong>kebijakan, syarat, dan ketentuan </strong> dari ISP.
                        </p>
                    </div>
                    {/* QOS */}
                    <div>
                        <h6 className='text-lg font-bold mb-5'>Contoh Pengukuran Kualitas Koneksi Internet</h6>

                        {/* input filter */}
                        <div>
                            <form  >
                                <div className="flex flex-wrap mx-0 mb-2">
                                    <div className='flex flex-col w-full md:w-1/2' >
                                        <div className="w-full   py-2 pr-2 mb-1 md:mb-0">
                                            <label
                                                htmlFor="parameter-qos"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >Parameter QoS</label
                                            >
                                            <select
                                                id="parameter-qos"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                            >
                                                <option>Throughput</option>
                                                <option>Delay</option>
                                                <option>Jitter</option>
                                                <option>PacketLoss</option>
                                            </select>
                                        </div>
                                        <div className="w-full   py-2 pr-2 mb-1 md:mb-0">
                                            <label
                                                htmlFor="isp"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >ISP</label
                                            >
                                            <select
                                                id="isp"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                            >
                                                <option>PT_L</option>
                                                <option>PT_I</option>
                                            </select>
                                        </div>
                                        <div className="w-full  py-2 pr-2 mb-1 md:mb-0">
                                            <label
                                                htmlFor="jenisproduk"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >Jenis Produk</label
                                            >
                                            <select
                                                id="jenisproduk"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                            >
                                                <option>Internet 20Mbps</option>
                                                <option>Internet 10Mbps</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className='flex flex-col w-full md:w-1/2'>
                                        <div className="w-full  py-2  mb-1 md:mb-0 ">
                                            <label
                                                htmlFor="lokasi"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >Lokasi</label
                                            >
                                            <select
                                                id="lokasi"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                            >
                                                <option>Sleman</option>
                                                <option>Yogyakarta</option>
                                            </select>
                                        </div>
                                        <div className="w-full  py-2 mb-1 md:mb-0 ">
                                            <label
                                                htmlFor="tanggalmulai"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >Tanggal Mulai</label
                                            >
                                            <input
                                                type="date"
                                                id="tanggalmulai"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                // max={endDate}
                                                min=""
                                                required
                                            // value={startDate}
                                            // onChange={(e) => setStartDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="w-full  py-2 mb-1 md:mb-0 ">
                                            <label
                                                htmlFor="tanggalakhir"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >Tanggal Akhir</label
                                            >
                                            <input
                                                type="date"
                                                id="tanggalakhir"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                // max={endDate}
                                                min=""
                                                required
                                            // value={startDate}
                                            // onChange={(e) => setStartDate(e.target.value)}
                                            />
                                        </div>

                                    </div>
                                    <div className="w-full mb-6 mt-2">
                                        <button
                                            type="submit"
                                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Cari
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* chart */}
                        <div className=' p-3 border rounded-lg m-3'>
                            <div className="flex flex-wrap mx-0 mb-2">
                                <div className="w-full md:w-full p-3 mb-1 md:mb-0">
                                    <div className='h-96'>
                                        <Bar data={databarmulti} options={{ maintainAspectRatio: false, }} />
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-wrap mx-0 mb-2">
                                <div className="w-full md:w-1/2 p-2 mb-1 md:mb-0 ">
                                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                        <div className='flex text-base'>
                                            Rata-rata
                                        </div>
                                        <div className='flex text-lg font-bold'>
                                            16.9 Mbps
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-2 mb-1 md:mb-0 ">
                                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                        <div className='flex text-base'>
                                            Standar
                                        </div>
                                        <div className='flex text-lg font-bold'>
                                            Good
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap mx-0 mb-2">
                                <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                        <div className='flex text-base'>
                                            Std Deviasi
                                        </div>
                                        <div className='flex text-lg font-bold'>
                                            1.1
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                        <div className='flex text-base'>
                                            Minimal
                                        </div>
                                        <div className='flex text-lg font-bold'>
                                            12.2 Mbps
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                    <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                        <div className='flex text-base'>
                                            Maximal
                                        </div>
                                        <div className='flex text-lg font-bold'>
                                            19.8 Mbps
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-10'>
                        </div>
                    </div>
                    {/* QoE */}
                    <div>
                        <h6 className='text-lg font-bold mb-5'>Contoh Pendapat Masyarakat Tentang ISP</h6>
                        <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                            Penjelasan Kok review banyak yang jelek berdasar jurnal
                        </p>
                        <InputFilterTweetHome
                            setFilteredTweet={setFilteredTweet} setSentimenSum={setSentimenSum}
                            setSentimenDaily={setSentimenDaily}
                        />
                        <SentimenChartCardHome sentimenDaily={sentimenDaily} sentimenSum={sentimenSum} filteredTweet={filteredTweet} />
                    </div>

                </div>
                <footer
                    className="container p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900"
                >

                    <span
                        className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
                    >© 2022 <a href="localhost:3000" className="hover:underline">MONIQQ</a>. All Rights
                        Reserved.
                    </span>
                </footer>


            </div>

        </div >
    )
}

export default BelajarQOS