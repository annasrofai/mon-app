import React, { useEffect } from 'react'
import { logoMoniqq } from '../../assets';

const Login = () => {
    useEffect(() => {
        document.title = "MONIQQ - Login";
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 h-screen dark:bg-gray-900 p-4">
            <div
                className=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <div className=" flex flex-col items-center justify-center p-8 space-y-4 ">
                    <a
                        href="localhost:3000"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img className="h-5 mr-2" src={logoMoniqq} alt="logo" />
                    </a>
                    <div>
                        <h6
                            className="text-center text-xl font-bold mb-2 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                        >
                            Sign in
                        </h6>
                        <p
                            className="text-center text-xs font-light text-gray-500 dark:text-white"
                        >
                            Khusus untuk Admin dan Penyedia Jasa Internet
                        </p>
                    </div>
                    <form className="w-full space-y-4 md:space-y-6" action="#">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Email</label
                            >
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Password</label
                            >
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login