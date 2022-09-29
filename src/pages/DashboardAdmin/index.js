import React from 'react'
import { logoMoniqq } from '../../assets';
import { useState } from "react";
import { Accordion, Table } from 'flowbite-react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import { useEffect } from 'react';
// import { QosModal } from './components'
import QosModal from '../../pages/DashboardAdmin/components/QosModal'

Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const DashboardAdmin = () => {
    // untuk ubah title
    useEffect(() => {
        document.title = "MONIQQ - Dashboard Admin";
    }, []);
    const [openSidebars, setOpenSidebars] = useState(false);


    const labels = ['22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222'];

    const databarmulti = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(200, 162, 235, 0.5)',
            },
        ],

    };
    const databar = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],

    };
    const dataline = {
        labels: ["2022/21/12", "2022/21/12", "2022/21/12", "2022/21/12", "2022/21/12"],
        datasets: [
            {
                label: "Throughput",
                data: [19, 11, 10, 12, 13],
                fill: false,
                backgroundColor: 'rgba(5, 99, 132, 0.8)',
                borderColor: 'rgba(5, 99, 132, 0.8)',
            }
        ]
    };

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
                        <img className="h-6" src={logoMoniqq} alt="" />
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
                                <span className="ml-3">Quality of Service</span>
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
                    <header className="flex bg-blue-800 items-center px-3 h-16">
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
                            <div className="flex p-3 mb-10">
                                <span className="font-semibold text-4xl ">
                                    Quality of Service
                                </span>
                            </div>
                        </div>
                        <div className='border w-full mb-14'></div>
                        {/* input data */}
                        <div className='px-3 py-5 text-xl font-semibold'>Tambah Data Pengukuran Quality Of Service</div>
                        <form>
                            <div className="flex flex-wrap mx-3 px-3 py-5 border rounded-lg">
                                <div className="flex flex-col gap-10 w-full pb-5 pt-0  md:w-1/2 px-3 mb-6 md:mb-0 ">
                                    {/* pengguna */}
                                    <div>
                                        <label
                                            htmlFor="pengguna"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Pengguna</label
                                        >
                                        <input
                                            type="text"
                                            id="pengguna"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                    </div>

                                    {/* ISP */}
                                    <div>
                                        <label
                                            htmlFor="isp"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Penyedia Jasa Internet</label
                                        >
                                        <select
                                            id="isp"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        >
                                            <option>LifeMedia</option>
                                            <option>IndiHome</option>
                                        </select>
                                    </div>
                                    {/* Jenis Produk*/}
                                    <div>
                                        <label
                                            htmlFor="jenis"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Jenis Produk</label
                                        >
                                        <input
                                            type="text"
                                            id="jenis"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="bandwidth"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Bandwidth</label
                                        >
                                        <select
                                            id="bandwidth"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        >
                                            <option>20Mbps</option>
                                            <option>10Mbps</option>
                                        </select>
                                    </div>
                                    {/* Lokasi */}
                                    <div>
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

                                </div>
                                <div className=" flex flex-col gap-4 w-full pb-5 pt-0  md:w-1/2 px-3 mb-6 md:mb-0">
                                    {/* file throughput */}
                                    <div>
                                        <label
                                            htmlFor="filethroughput"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Pilih File Throughput</label
                                        >
                                        <input
                                            type="file"
                                            id="filethroughput"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                            required
                                        />
                                    </div>
                                    {/* file delay */}
                                    <div>
                                        <label
                                            htmlFor="filedelay"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Pilih File Delay</label
                                        >
                                        <input
                                            type="file"
                                            id="filedelay"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    {/* file jitter */}
                                    <div>
                                        <label
                                            htmlFor="filejitter"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Pilih File Jitter</label
                                        >
                                        <input
                                            type="file"
                                            id="filejitter"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    {/* file packet loss */}
                                    <div>
                                        <label
                                            htmlFor="filepacketloss"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Pilih File Jitter</label
                                        >
                                        <input
                                            type="file"
                                            id="filepacketloss"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full p-3 my-2 md:mb-0">
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Unggah
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/*  */}
                        <div className='border w-full my-14'></div>
                        {/* tabel data semua*/}
                        <div className='px-3 py-5 text-xl font-semibold mt-6'>Daftar Pengukuran Quality Of Service</div>
                        <div className="w-full p-5 px-3 mb-6 md:mb-0">
                            <Table >
                                <Table.Head>
                                    <Table.HeadCell>
                                        Nama
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Provider
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Lokasi
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Jenis Produk
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Aksi
                                    </Table.HeadCell>

                                </Table.Head>
                                <Table.Body className="divide-y">
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Person 1
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Lifemedia
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Sleman
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Internet 20Mbps
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            <div className='flex gap-6'>
                                                <div>
                                                    <button type="button" className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                                        Detail
                                                    </button>

                                                </div>
                                                <div>
                                                    <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                                        Hapus
                                                    </button>

                                                </div>
                                            </div>

                                        </Table.Cell>

                                    </Table.Row>
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Person 1
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Lifemedia
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Sleman
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Internet 20Mbps
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            <div className='flex gap-6'>
                                                <div>
                                                    <button type="button" className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                                        Detail
                                                    </button>

                                                </div>
                                                <div>
                                                    <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                                        Hapus
                                                    </button>

                                                </div>
                                            </div>

                                        </Table.Cell>

                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                        {/*  */}
                        <div className='border w-full my-14'></div>
                        {/* tabel detail */}
                        <div className='px-3 py-5 text-xl font-semibold mt-6'>Detail Data Pengukuran Quality Of Service</div>
                        {/* identitas */}
                        {/* <div className='px-3 py-3 text-lg font-medium '>Identitas</div> */}
                        <div className=''>
                            <div className="w-full p-5 px-3 mb-6 md:mb-0">
                                <Table >
                                    <Table.Head>
                                        <Table.HeadCell>
                                            Nama
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Provider
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Lokasi
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Jenis Produk
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Person 1
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Lifemedia
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Sleman
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Internet 20Mbps
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                            <div className='px-3'>
                                <Accordion alwaysOpen={true}>
                                    <Accordion.Panel>
                                        <Accordion.Title className='text-2xl'>
                                            Throughput
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <div>
                                                <div className="w-full p-5 px-3 md:mb-0">
                                                    <div className='border h-64 p-4 mb-5 rounded-lg flex  w-full items-center justify-center'>
                                                        <Line data={dataline} options={{ maintainAspectRatio: false }} />
                                                    </div>
                                                    <div className='overflow-y-scroll h-48 border rounded-lg'>
                                                        <Table >
                                                            <Table.Head>
                                                                <Table.HeadCell>
                                                                    Datetime
                                                                </Table.HeadCell>
                                                                <Table.HeadCell>
                                                                    Nilai
                                                                </Table.HeadCell>

                                                            </Table.Head>
                                                            <Table.Body>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>

                                                            </Table.Body>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>
                                            Delay
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <div>
                                                <div className="w-full p-5 px-3 md:mb-0">
                                                    <div className='border h-64 p-4 mb-5 rounded-lg flex  w-full items-center justify-center'>
                                                        <Line data={dataline} options={{ maintainAspectRatio: false }} />
                                                    </div>
                                                    <div className='overflow-y-scroll h-48 border rounded-lg'>
                                                        <Table >
                                                            <Table.Head>
                                                                <Table.HeadCell>
                                                                    Datetime
                                                                </Table.HeadCell>
                                                                <Table.HeadCell>
                                                                    Nilai
                                                                </Table.HeadCell>

                                                            </Table.Head>
                                                            <Table.Body>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>

                                                            </Table.Body>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>
                                            Jitter
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <div>
                                                <div className="w-full p-5 px-3 md:mb-0">
                                                    <div className='border h-64 p-4 mb-5 rounded-lg flex  w-full items-center justify-center'>
                                                        <Line data={dataline} options={{ maintainAspectRatio: false }} />
                                                    </div>
                                                    <div className='overflow-y-scroll h-48 border rounded-lg'>
                                                        <Table >
                                                            <Table.Head>
                                                                <Table.HeadCell>
                                                                    Datetime
                                                                </Table.HeadCell>
                                                                <Table.HeadCell>
                                                                    Nilai
                                                                </Table.HeadCell>

                                                            </Table.Head>
                                                            <Table.Body>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>

                                                            </Table.Body>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                        <Accordion.Title>
                                            Packet Loss
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <div>
                                                <div className="w-full p-5 px-3 md:mb-0">
                                                    <div className='border h-64 p-4 mb-5 rounded-lg flex  w-full items-center justify-center'>
                                                        <Line data={dataline} options={{ maintainAspectRatio: false }} />
                                                    </div>
                                                    <div className='overflow-y-scroll h-48 border rounded-lg'>
                                                        <Table >
                                                            <Table.Head>
                                                                <Table.HeadCell>
                                                                    Datetime
                                                                </Table.HeadCell>
                                                                <Table.HeadCell>
                                                                    Nilai
                                                                </Table.HeadCell>

                                                            </Table.Head>
                                                            <Table.Body>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        22/02/2222
                                                                    </Table.Cell>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                        19.8
                                                                    </Table.Cell>
                                                                </Table.Row>

                                                            </Table.Body>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>

                                </Accordion>
                            </div>
                        </div>


                    </section>
                    {/* coba modal */}

                </div>
            </div >
        </div>
    )
}

export default DashboardAdmin