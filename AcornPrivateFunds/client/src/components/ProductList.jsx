import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductList = ({ product, setProduct }) => {
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setProduct]);

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                setProduct(product.filter((product) => product._id !== id));
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
            
            
            <div>
                <Link to=  {"/create"} class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-5">Create another Loan</Link>
                {product.map((product, index) => {
                    return (
                        <div key={index} className="border p-4 mb-4">
                            <p className="text-xl font-semibold mb-2">{product.title}</p>
                            <p className="text-xl font-semibold mb-2">{product.price}</p>
                            <p className="text-xl font-semibold mb-2">{product.description}</p>
                            
                            <Link to={`/${product._id}`} className="text-blue-500 hover:underline mb-2 block">
                                {product.title}'s Page!
                            </Link>

                            <Link to={`/edit/${product._id}`} className="text-green-500 hover:underline block">
                                Edit Loan
                            </Link>
                            <button className="text-red-500 hover:underline block"
                                onClick={(e) => {
                                    deleteProduct(product._id);
                                }}>
                                Delete
                            </button>
                        </div>

                        
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
