import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = ({ product, setProduct }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
    });

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Hello");
        axios.post("http://localhost:8000/api/products", formData)
            .then((res) => {
                console.log(res);
                setProduct([...product, res.data]);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to Acorn Private Funds</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Fill out the application below</p>
            </div>
            <form onSubmit={submitHandler} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">Reason for Loan</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-semibold leading-6 text-gray-900">Loan Amount</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            onChange={changeHandler}
                        />
                    </div>

                    
                    <input
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        type="submit"
                        value="Create"
                    />
                </div>
            </form>
        </div>
    );
};

export default Product;
