import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
    });

    const [errors, setErrors] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setFormData(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]); // Include id as a dependency to rerun the effect when it changes

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/products/${id}`, formData)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                    const errArray = [];
                    // console.log(err);
                    for (const key of Object.keys(err.response.data.errors)) {
                        errArray.push(err.response.data.errors[key].message);
                    }
                    console.log(errArray);
                    setErrors(errArray);
                });
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div>
            {errors.map((err, idx) => {
                return <p key={idx}>{err}</p>;
            })}
            </div>
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
            <h1 className="text-3xl font-semibold mb-4">Update a Product</h1>
            <form onSubmit={updateProduct} className="space-y-4">
                <div>
                    <label className="block font-semibold">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={changeHandler}
                        className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={changeHandler}
                        className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={changeHandler}
                        className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                    />
                </div>
                <input
                    type="submit"
                    value="Update"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                />
            </form>
        </div>
    );
};

export default Update;
