import React, { useEffect } from 'react'
import { Navbar, Button, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq, imageThroughput, imageDelayBad, imageDelayGood } from '../../assets'
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const BelajarDelay = () => {
    useEffect(() => {
        document.title = "Belajar Delay/Latency - MONIQQ";
    }, []);
    const labels = ['Person1', 'person2', 'person3'];
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
        <div className='flex flex-col div h-screen scroll-smooth  '>
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
            <div className='container mt-12'>
                <h4 className='text-3xl font-bold my-10'>Memahami <i>Delay</i> atau <i>Latency</i></h4>

            </div>

            <div className='container w-full flex flex-wrap justify-around '>
                <div className='w-full md:w-3/4 flex flex-col '>

                    <h5 id='apa-itu-delay-latency' className='text-xl font-bold mb-5'>
                        Apa itu
                        <span className='italic'> Delay</span>
                        ? Apa itu
                        <span className='italic'> Latency</span>
                        ?
                    </h5>
                    <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                        <span className='font-semibold italic'> Delay </span>
                        dan
                        <span className='font-semibold italic'> Latency </span>
                        merujuk pada satu hal yang sama, yaitu
                        <span className='font-semibold'> waktu </span>
                        yang dibutuhkan untuk mengirimkan paket data dari perangkat
                        (smartphone, laptop, dan personal computer) Anda ke server dan kembali ke perangkat Anda.
                    </p>
                    <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                        <i>Delay</i> dalam jaringan internet dinyatakan dengan satuan milliseconds (ms).
                    </p>

                    <h5 id='illustrasi-delay' className='text-xl font-bold mb-5'>
                        Illustrasi
                        <span className='italic'> Delay</span>
                    </h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Ilustrasi untuk memahami
                        <span className='font-semibold italic'> Delay </span>
                        adalah sebagai berikut.
                    </p>
                    <ul className="list-decimal mx-7 mb-3 text-gray-700">
                        <li className='mb-2'>
                            Anda membuka browser dan mengetik www.google.com.
                        </li>
                        <li className='mb-2'>
                            Perangkat Anda dan server dari www.google.com berinteraksi satu sama lain untuk menyediakan konten yang Anda minta.
                        </li>
                        <li className='mb-2'>
                            Halaman di browser Anda mulai memuat (loading) dan menampilkan konten yang Anda minta.
                        </li>
                    </ul>

                    <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-1 mb-7 leading-relaxed italic rounded">
                        <p className='text-base font-regular leading-relaxed text-gray-700'>
                            Jadi,
                            <span className='font-semibold '> waktu yang diperlukan </span>
                            mulai saat Anda memberikan perintah hingga konten termuat disebut
                            <span className='font-semibold italic'> Delay </span>
                            .
                        </p>
                    </div>


                    <h5 id='standar-nilai-delay' className='text-xl font-bold mb-5'>Standar Nilai <i>Delay</i></h5>
                    <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                        <span className='font-semibold '> Semakin kecil </span>
                        nilai Delay, maka
                        <span className='font-semibold '> semakin baik (cepat)</span>
                        .
                    </div>
                    <div>
                        <img
                            src={imageDelayGood}
                            className="h-full w-full "
                            alt="imageDelayGood"
                        />
                    </div>
                    <div>
                        <img
                            src={imageDelayBad}
                            className="h-full w-full "
                            alt="imageDelayBad"
                        />
                    </div>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Berdasarkan penelitian Mister X et.al. Nilai throughput yang. percuma jika nilai bandwidth besar tapi throughputnya tetap kecil.
                    </p>

                    <div className='flex mt-2 mb-10 justify-center'>
                        <Table hoverable={true}>
                            <Table.Head>
                                <Table.HeadCell>
                                    Nilai
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Index
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Category
                                </Table.HeadCell>

                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        &#60;0%&#62; &ge;asda &le;


                                    </Table.Cell>
                                    <Table.Cell>
                                        3
                                    </Table.Cell>
                                    <Table.Cell>
                                        Good
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        0%
                                    </Table.Cell>
                                    <Table.Cell>
                                        3
                                    </Table.Cell>
                                    <Table.Cell>
                                        Good
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        0%
                                    </Table.Cell>
                                    <Table.Cell>
                                        3
                                    </Table.Cell>
                                    <Table.Cell>
                                        Good
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        0%
                                    </Table.Cell>
                                    <Table.Cell>
                                        3
                                    </Table.Cell>
                                    <Table.Cell>
                                        Good
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>

                    <h5 id='pengaruh-delay' className='text-xl font-bold mb-5'>Pengaruh <i>Delay</i></h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Nilai Delay memiliki pengaruh terhadap seluruh aktivitas Anda di Internet, seperti browsing, streaming, dan gaming.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Delay akan sangat berpengaruh terhadap aktivitas yang membutuhkan respon cepat.
                    </p>
                    {/* <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        yang butuh sinkron atau langsung langsung sangat terpengaruh. seperti panggilan streaming game
                    </p> */}
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Nilai Delay yang rendah akan membuat mayoritas aktivitas anda di internet berjalan dengan lancar.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Jika nilai Delay tinggi, maka Anda akan meraskan Gejala-gejala sebagai berikut.
                    </p>
                    <ul className="list-disc mx-7 mb-6 text-gray-700">
                        <li className='mb-2'>
                            Lambat dalam memuat situs web, game, dan atau aplikasi online.
                        </li>
                        <li className='mb-2'>
                            Keterlambatan suara atau video saat melakukan panggilan online.
                        </li>
                        <li className='mb-2'>
                            Keterlambatan respons dalam game saat menekan tombol (Nge-lag).
                        </li>
                        <li className='mb-2'>
                            Reconnecting atau bahkan terputus dari game.
                        </li>
                        <li className='mb-2'>
                            Lambat dalam memuat streaming video/audio (buffering).
                        </li>
                    </ul>


                    <h5 id='pengukuran-delay' className='text-xl font-bold mb-5'>Pengukuran <i>Delay</i></h5>
                    {/* input filter */}
                    <div>
                        <form  >
                            <div className="flex flex-wrap mx-0 mb-2">
                                <div className="w-full md:w-1/4 p-3 mb-1 md:mb-0">
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
                                        <option>LifeMedia</option>
                                        <option>IndiHome</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/4 p-3 mb-1 md:mb-0">
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
                                <div className="w-full md:w-1/4 p-3 mb-1 md:mb-0 ">
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
                                <div className="w-full md:w-1/4 p-3 mb-6 sm:mt-7 ">
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                                        20ms
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
                                        Varian
                                    </div>
                                    <div className='flex text-lg font-bold'>
                                        1
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                    <div className='flex text-base'>
                                        Minimal
                                    </div>
                                    <div className='flex text-lg font-bold'>
                                        20ms
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                    <div className='flex text-base'>
                                        Maximal
                                    </div>
                                    <div className='flex text-lg font-bold'>
                                        20ms
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-10'>
                    </div>


                </div>
                <aside className='w-1/4 flex flex-col'>
                    <div className='sticky top-14 px-5'>
                        <div className='px-4 flex-col hidden overflow-auto lg:block border-l-2 border-blue-50 '>
                            <h6 className='mb-3 text-gray-900 dark:text-gray-100 font-semibold text-lg'>Daftar Isi</h6>
                            <a href='/belajarqos/delay/#apa-itu-delay-latency'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Apa itu Delay?
                            </a>
                            <a href='/belajarqos/delay/#apa-itu-delay-latency'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Apa itu Latency?
                            </a>
                            <a href='/belajarqos/delay/#illustrasi-delay'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Illustrasi
                            </a>

                            <a href='/belajarqos/delay/#standar-nilai-delay'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            >Standar Delay
                            </a>
                            <div>
                                <a href='/belajarqos/delay/#standar-nilai-delay'
                                    className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Delay Bagus
                                </a>
                                <a href='/belajarqos/delay/#standar-nilai-delay'
                                    className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Delay Buruk
                                </a>
                            </div>
                            <a href='/belajarqos/delay/#pengaruh-delay'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Pengaruh Delay
                            </a>

                            <a href='/belajarqos/delay/#pengukuran-delay'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Pengukuran Delay
                            </a>
                            <h6 className='mt-5 mb-3 text-gray-900 dark:text-gray-100 font-semibold text-base'>Parameter Lain</h6>
                            <Link to='/belajarqos/throughput'>
                                <div
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Throughput
                                </div>
                            </Link>
                            <Link to='/belajarqos/jitter'>
                                <div
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Jitter
                                </div>
                            </Link>
                            <Link to='/belajarqos/packetloss'>
                                <div
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Packet Loss
                                </div>
                            </Link>
                        </div>

                    </div>
                </aside>



            </div>

        </div >
    )
}

export default BelajarDelay