import React, { useEffect, useState } from 'react'
import { Navbar, Button, Flowbite, DarkThemeToggle } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq } from '../../assets'

import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import InputFilterTweetHome from './component/InputFilterTweetHome';
import SentimenChartCardHome from './component/SentimenChartCardHome';
import CekQoS from './component/CekQoS';
Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);


const Pengukuran = () => {
    useEffect(() => {
        document.title = "Pengukuran - MONIQQ";
    }, []);

    const [filteredTweet, setFilteredTweet] = useState([])
    const [sentimenSum, setSentimenSum] = useState([])
    const [sentimenDaily, setSentimenDaily] = useState([])
    const [cardHasilSentimen, setCardHasilSentimen] = useState(false);
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
            {/* navbar */}
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
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Belajar
                                    </div>
                                </li>
                            </Link>
                            <Link to='/pengukuran'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Pengukuran
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>

            </header>
            <div className='container flex flex-col items-center justify-center mt-16'>
                <div className='w-full md:w-3/4 flex flex-col '>

                    {/* QOS */}
                    <div className='my-10'>
                        <h5 className='text-2xl font-bold mb-5'>Pengukuran Kualitas Koneksi Internet ISP (QoS)</h5>
                        <p className='text-base font-regular mb-4 leading-loose text-gray-700'>
                            Kualitas koneksi internet (<i>Quality of Service</i>) secara teknis dapat diukur dengan beberapa parameter, seperti
                            <span className='font-semibold italic'> Throughput</span>,
                            <span className='font-semibold italic'> Delay/Latency</span>,
                            <span className='font-semibold italic'> Jitter</span>, dan
                            <span className='font-semibold italic'> Packet Loss</span>.
                        </p>

                        {/* ukur masukan user */}
                        <div className='mt-12 mb-12'>
                            <h6 className='text-xl font-bold mb-5'>Cek Internet Anda</h6>
                            {/* pengantar */}
                            <div className='text-base my-4 font-regular leading-relaxed  text-gray-700 flex justify-between items-center'>
                                <div>
                                    Anda dapat memeriksa nilai standar kualitas koneksi pada internet Anda secara mandiri.
                                    Silakan ikuti langkah-langkah berikut.
                                    <span className="">
                                        <ol className="list-decimal px-8 ">
                                            <li>
                                                Masuk ke dalam halaman
                                                <a className="text-blue-800 hover:text-blue-900 underline"
                                                    href="https://www.speedtest.net/"
                                                    target="_blank" rel="noopener noreferrer"
                                                > speedtest.net </a>
                                                terlebih dahulu.
                                            </li>
                                            <li>
                                                Ukur parameter-parameter kualitas koneksi internet (QoS) Anda dan catat hasilnya.
                                            </li>
                                            <li>
                                                Masukkan hasil pengukuran tersebut pada kolom-kolom pengecekan di bawah.
                                            </li>
                                            <li>Lihat hasil pengecekan standar pada komponen yang akan tampil di bawahnya.</li>
                                        </ol>
                                    </span>
                                </div>
                            </div>
                            {/* cek qos manual */}
                            <CekQoS />
                            {/* saran */}
                            <div className='mt-4'>
                                <div className='text-regular py-5 font-semibold flex justify-between items-center'>
                                    <div>
                                        Jika Hasil Pengukuran QoS Tidak Sesuai Harapan
                                    </div>
                                </div>
                                <p className='text-base font-regular mb-2 leading-relaxed text-gray-600'>
                                    Jangan terburu-buru memberikan komplain kepada ISP ketika
                                    hasil pengukuran QoS tidak sesuai standar atau yang Anda inginkan.
                                </p>
                                <div>
                                    <ol className="list-decimal leading-loose px-8  text-gray-600">
                                        <li>
                                            Pastikan bahwa perangkat Anda, seperti <i>smartphone</i>, laptop, komputer, dan router dalam keadaan yang prima.
                                        </li>
                                        <li>
                                            Pastikan perangkat tidak sedang menjalankan proses lain yang membebani jaringan, seperti <i>download</i> atau <i>streaming</i> video.
                                        </li>
                                        <li>
                                            Pastikan jumlah total pengguna internet di tempat Anda sesuai dengan anjuran dari ISP.
                                        </li>
                                    </ol>
                                </div>

                                <p className='text-base font-regular mb-4 leading-loose text-gray-600'>
                                    Jika Anda telah melakukan Langkah-langkah di atas,
                                    tetapi hasil pengukuran QoS masih tidak sesuai standar atau yang Anda inginkan.
                                    Segera hubungi <i> customer service </i> dari ISP yang Anda langgan untuk mengajukan perbaikan.
                                </p>

                            </div>
                        </div>
                        {/* contoh pengukuran */}
                        <div className=''>
                            <h6 className='text-xl font-bold mb-5'>Contoh Pengukuran Quality of Service dari ISP</h6>
                            {/* filter */}
                            <div className='p-4 border rounded-xl'>
                                <form  >
                                    <div className='text-lg font-bold py-3'>Filter</div>
                                    <div className="flex flex-wrap mx-0 mb-2">
                                        <div className='flex flex-col w-full md:w-1/2' >
                                            {/* parameter qos */}
                                            <div className="w-full py-2 sm:pr-2 md:pr-4 mb-1 md:mb-0">
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
                                            {/* isp */}
                                            <div className="w-full py-2 sm:pr-2 md:pr-4 mb-1 md:mb-0">
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
                                            {/* jenisproduk */}
                                            <div className="w-full  py-2 sm:pr-2 md:pr-4 mb-1 md:mb-0">
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
                                            {/* lokasi */}
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
                                            {/* Tanggal mulai */}
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
                                            {/* Tanggal selesai */}
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
                                        <div className="w-full mb-2 mt-2">
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
                            <div className=' p-3 border rounded-lg mt-6'>
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
                    </div>
                    {/* QoE */}
                    <div className='my-10'>
                        <h5 className='text-2xl font-bold mb-5'>Pengukuran Pendapat Pengguna ISP (QoE)</h5>
                        <div className='text-base my-4 font-regular leading-loose flex justify-between items-center  text-gray-600' >
                            <div>
                                Pendapat pengguna ISP yang menjadi object analisis sentimen adalah pendapat pengguna ISP fixed broadband di sosial media Twitter.
                                Tweet pendapat pengguna diambil berdasarkan kata kunci nama ISP.
                            </div>
                        </div>
                        <div className='mt-8 mb-8'>
                            <InputFilterTweetHome
                                setFilteredTweet={setFilteredTweet}
                                setSentimenSum={setSentimenSum}
                                setSentimenDaily={setSentimenDaily}
                                setCardHasilSentimen={setCardHasilSentimen}
                            />
                            {cardHasilSentimen &&
                                <SentimenChartCardHome
                                    sentimenDaily={sentimenDaily}
                                    sentimenSum={sentimenSum}
                                    filteredTweet={filteredTweet} />
                            }
                        </div>
                        {/* kecenderungan */}
                        <div className='my-6 '>
                            <div className='text-regular py-5 font-semibold flex justify-between items-center'>
                                <div>
                                    Kecenderungan Sentimen <i>Tweet</i>
                                </div>
                            </div>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Anda akan menemui banyak pendapat pengguna ISP di Twitter yang cenderung memiliki sentimen negatif.

                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>

                                Berdasarkan jurnal "<i>Bad is Stronger than Good</i>" yang ditulis oleh
                                Baumeister et al.<span className='text-xs'><sup >[2]</sup></span>.

                            </p>
                            <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-1 mb-7 leading-relaxed italic rounded">
                                <p className='text-base font-regular leading-relaxed text-gray-700'>
                                    secara alamiah manusia cenderung lebih terpengaruh oleh pengalaman buruk daripada pengalaman baik.
                                    Pengalaman buruk juga lebih menonjol dan cenderung bertahan lama di pikiran manusia.
                                </p>
                            </div>
                            <p className='text-base font-regular my-4 leading-relaxed text-gray-700'>
                                Oleh karena itu, Pelanggan akan lebih cenderung menulis ulasan negatif daripada ulasan positif.
                            </p>
                            {/* <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-1 mb-7 leading-relaxed italic rounded">
                                <p className='text-base font-regular leading-relaxed text-gray-700'>
                                    Jadi,
                                    <span className='font-semibold '> waktu yang diperlukan </span>
                                    mulai saat Anda memberikan perintah hingga konten termuat disebut
                                    <span className='font-semibold italic'> Delay </span>
                                    .
                                </p>
                            </div> */}
                        </div>
                        {/* saran */}
                        <div className='mt-6 mb-12'>
                            <div className='text-regular py-5 font-semibold flex justify-between items-center'>
                                <div>
                                    Menyikapi Pendapat di Twitter
                                </div>
                            </div>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Anda harus bijak dalam menyikapi pendapat pengguna ISP di Twitter.
                            </p>
                            <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                                Berdasarkan penelitian
                                <a href="https://biz.source.colostate.edu/negative-online-reviews-impact-study/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="hover:underline"
                                > Qahri-Saremi, H.
                                </a> yang dirangkum oleh Sylte, A.<span className='text-xs'><sup >[3]</sup></span> respon yang dapat Anda lakukan terhadap pendapat yang ada di internet adalah
                            </p>
                            <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-1 mb-7 leading-relaxed italic rounded">
                                <p className='text-base font-regular leading-relaxed text-gray-700'>
                                    Hindari respons emosional yang alami terhadap informasi negatif dan berpikir kritis tentang seluruh informasi yang tersedia berdasarkan tujuan Anda.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='my-10'>
                        <h5 className='text-2xl font-bold mb-5'>Daftar Pustaka</h5>
                        {/* saran */}
                        <div className='mt-8 mb-12'>
                            <p className='text-sm font-regular mb-2 leading-relaxed text-gray-700'>
                                [1]  xxxx., et al. <i>Bad is Stronger than Good</i>. Review of General Psychology, 5(4), 323–370. (2001).
                            </p>
                            <p className='text-sm font-regular mb-2 leading-relaxed text-gray-700'>
                                [2]  Baumeister, R. F., et al. <i>Bad is Stronger than Good</i>. Review of General Psychology, 5(4), 323–370. (2001).
                            </p>
                            <p className='text-sm font-regular mb-2 leading-relaxed text-gray-700'>
                                [3] Sylte, A. <i>Why negative reviews could have more of an impact on some of the most important customers </i>[online].
                                Available:
                                <a href="https://biz.source.colostate.edu/negative-online-reviews-impact-study/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="hover:underline"
                                > https://biz.source.colostate.edu/negative-online-reviews-impact-study/
                                </a>
                            </p>

                        </div>
                    </div>

                </div>
                {/* footer */}
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

export default Pengukuran