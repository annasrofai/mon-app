import React, { useEffect } from 'react'
import { Navbar, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq } from '../../assets'

const BelajarQOS = () => {
    useEffect(() => {
        document.title = "MONIQQ - Belajar Internet";
    }, []);
    return (
        <div className='flex flex-col div h-screen  '>
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
                    <div className="flex md:order-2">
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                        <Navbar.Toggle />
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
                    <h4 className='text-3xl font-bold my-5'>Performa Internet</h4>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Anda sebagai pengguna internet pasti menginginkan kualitas koneksi yang <strong>cepat, andal, dan konsisten. </strong>

                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Setiap orang pasti menginginkan pengalaman menggunakan internet (<i>browsing</i>, <i>gaming</i>, dan <i>streaming</i>) yang <strong>menyenangkan</strong> (optimal).
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Performa internet Anda dapat dipahami melalui beberapa <strong>parameter</strong> <i>quality of service</i>.
                        Luaran dari parameter ini juga bergantung dengan <strong> syarat dan ketentuan </strong> dari Penyedia Jasa Internet (ISP).
                    </p>
                    <p className='text-base font-regular mb-8 leading-relaxed text-gray-700'>
                        Memahami kedua hal tersebut dapat menambah pengetahuan Anda secara menyeluruh.
                    </p>

                    <h5 className='text-xl font-bold mb-5'>Parameter Quality of Service</h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Kualitas koneksi (Quality of Service) dapat diukur dengan beberapa parameter, seperti Throughput, Delay, Jitter, dan Packet Loss.
                    </p>
                    <ul className="list-disc mx-5 mb-16">
                        <li className='mb-2'>
                            Parameter Throughput dan Delay digunakan untuk mengukur “kecepatan”
                        </li>
                        <li className='mb-2'>
                            Parameter Packet Loss digunakan untuk mengukur “keandalan”
                        </li>
                        <li className='mb-2'>
                            Parameter Jitter digunakan untuk mengukur seberapa “konsistensi”
                        </li>
                    </ul>



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
                                <Link to="/belajarqos/throughput">
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
                                <Link to="/belajarqos/throughput">
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
                                <Link to="/belajarqos/throughput">
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

                    <h5 className='text-xl font-semibold my-8'>Hal lain yang perlu diketahui</h5>
                </div>


            </div>

        </div>
    )
}

export default BelajarQOS