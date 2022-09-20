import React, { useEffect } from 'react'
import { Navbar, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq, imageThroughput, imageDelayBad } from '../../assets'
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);
const BelajarThroughput = () => {
    const labels = ['22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222'];
    const databarmulti = {
        labels,
        datasets: [
            {
                label: 'Person 1',
                data: [18, 12, 13, 14, 17, 11, 10],
                backgroundColor: 'rgba(53, 90, 232, 0.5)',
            },
            {
                label: 'Person 2',
                data: [15, 20, 19, 19.1, 12, 19, 18],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Person 3',
                data: [15, 10, 11, 11, 12, 12, 18],
                backgroundColor: 'rgba(53, 162, 200, 0.5)',
            },

        ],

    };
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

            <div className='container w-full flex flex-wrap justify-around mt-16'>
                <div className='w-full md:w-3/4 flex flex-col '>
                    <h4 className='text-3xl font-bold my-5'>Throughput</h4>
                    <h5 className='text-xl font-bold mb-5'>Apa itu Throughput?</h5>
                    <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                        Mungkin Anda kurang familiar dengan istilah Throughput.
                        Throughput mungkin masih menjadi istilah yang asing, khususnya bagi orang awam (di luar dunia IT).
                    </p>

                    <h5 className='text-xl font-bold mb-5'>Bagaimana dengan istilah Bandwidth?</h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Istilah bandwidth mungkin lebih familiar bagi Anda.
                        Pasti Anda pernah mendengar kata Bandwidth saat hendak belangganan internet.
                    </p>

                    <h5 className='text-xl font-bold mb-5'>Jadi, apa arti kedua istilah tersebut? Mari kita ulas bersama.</h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Bandwidth dan Throughput adalah parameter yang digunakan untuk mengukur performa laju sebuah jaringan internet.
                        Keduanya dapat dinyatakan dalam satuan bps (bit/second) atau Bps (byte/second).
                    </p>
                    <div class="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                        Throughput merupakan jumlah data yang ditransfer dari sumber ke tujuan dalam jangka waktu tertentu,
                        sedangkan Bandwidth merupakan kapasitas transfer maksimum yang dapat dilakukan oleh jaringan.
                    </div>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Throughput dan bandwidth adalah dua konsep yang berbeda, tetapi masih saling terkait (mirip).
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Dengan memahami kedua istilah tersebut, Anda akan dapat memahami kualitas koneksi Anda secara komprehensif.
                    </p>

                    <h5 className='text-xl font-bold mb-5'>Salah Paham</h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Sering terjadi kesalahpahaman terkait dua istilah ini.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Bandwidth sering digunakan untuk mengukur laju suatu jaringan pada setiap saat.
                        Padahal, bandwidth merujuk pada kemampuan/kapasitas maksimal suatu jaringan dalam transfer data.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Untuk mengukur jumlah data yang ditransfer dalam waktu tertentu seharusnya menggunakan Throughput.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Anda akan sering menjumpai Penyedia Jasa Internet mengiklankan jasa internetnya berdasarkan besaran bandwidth yang tersedia.
                        Itu merupakan teknik pemasaran / gimmick marketing dari Penyedia Jasa Internet saja.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Hal yang perlu diluruskan adalah besaran transfer data tidak akan selalu sama pada setiap saat seperti yang ditawarkan ISP.
                        Besaran nilai throughput akan selalu lebih kecil atau sama dengan besar bandwidth.
                    </p>

                    <h5 className='text-xl font-bold mb-5'>Illustrasi</h5>
                    <div>
                        <img
                            src={imageThroughput}
                            className="h-full w-full "
                            alt="Img Throughpt"
                        />
                    </div>
                    <div>
                        <img
                            src={imageDelayBad}
                            className="h-full w-full "
                            alt="Img Throughpt"
                        />
                    </div>
                    <div>
                        <img
                            src={imageDelayBad}
                            className="h-full w-full "
                            alt="Img Throughpt"
                        />
                    </div>

                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Analogi yang dapat digunakan untuk menggambarkan hubungan antara keduanya adalah hubungan pipa dengan air.
                        Bandwidth sebagai pipa dan throughput sebagai air.
                        Jika pipa atau bandwidth semakin besar, maka air atau data yang dapat mengalir pada satu waktu juga semakin besar.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Dengan kata lain, besar bandwidth menentukan berapa banyak data yang dapat dikirim dan diterima perangkat pada satu waktu (Batas Maksimal),
                        sedangkan throughput memberi tahu Anda jumlah data yang benar-benar ditransmisikan.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Sebagai contoh, Anda berlangganan internet dengan bandwidth sebesar 10Mbps dan ingin mengunduh sebuah file di internet.
                        Ketika Anda mengunduh file tersebut, browser anda menunjukkan kecepatan sebesar 9,2Mbps.
                        Nilai 9.2Mbps inilah yang dimaksud dengan nilai throughput.
                    </p>


                    <h5 className='text-xl font-bold mb-5'>Pengukuran</h5>
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
                                        Varian
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


                    <div className='my-20'>

                    </div>



                </div>
                <aside className='invisible md:visible w-1/4 flex flex-col'>
                    <div className='sticky top-36'>
                        <div className='hidden min-h-[calc(100vh-9rem-113px)] overflow-auto pb-4 lg:block border'> </div>

                    </div>
                </aside>



            </div>

        </div >
    )
}

export default BelajarThroughput