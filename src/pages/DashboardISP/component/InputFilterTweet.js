import React from 'react'
import { useState } from 'react'
import { ispApi } from '../../../api'


const InputFilterTweet = ({ setFilteredTweet, setSentimenSum, setSentimenDaily, setKataNegatif, setKataPositif }) => {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    // const [hitungan, setHitungan] = useState("")
    const fetchTweets = async ({ startDate, endDate }) => {
        const { data } = await ispApi.fetchTweetData({ provider: 'firstmedia', startDate, endDate })
        setFilteredTweet(data.tweets)
        console.log(data.tweets)
    }
    const fetchSentimen = async ({ startDate, endDate }) => {
        const { data } = await ispApi.fetchSentimenData({ provider: 'firstmedia', startDate, endDate })
        setSentimenSum(data.sentimen_total)
        setSentimenDaily(data.sentimen_daily)
        console.log(data.sentimen_total)
        console.log(data.sentimen_daily)
    }
    const fetchKata = async ({ startDate, endDate }) => {
        const { data } = await ispApi.fetchKataData({ provider: 'firstmedia', startDate, endDate })
        setKataNegatif(data.kata_negatif)
        setKataPositif(data.kata_positif)
        console.log(data.kata_negatif)
        console.log(data.kata_positif)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (startDate.length !== 0 && endDate.length !== 0) {
            fetchTweets({ startDate, endDate });
            fetchSentimen({ startDate, endDate });
            fetchKata({ startDate, endDate });
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-wrap mx-0 mb-2">
                    <div className="w-full md:w-1/3 p-3 mb-1 md:mb-0">
                        <label
                            htmlFor="tanggalmulai"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Tanggal Mulai</label
                        >
                        <input
                            type="date"
                            id="tanggalmulai"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@flowbite.com"
                            required
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/3 p-3 mb-1 md:mb-0">
                        <label
                            htmlFor="tanggalakhir"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Tanggal Akhir</label
                        >
                        <input
                            type="date"
                            id="tanggalakhir"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@flowbite.com"
                            required
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/3 p-3 mb-6 sm:mt-7 ">
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
    )
}

export default InputFilterTweet