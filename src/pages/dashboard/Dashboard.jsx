import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../component/Navbar';

function Dashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log(response.data)
            setProducts(response.data);
        };

        fetchData();
    }, []);

    return (
        <>

        <Navbar/>
        <div className="flex flex-wrap justify-center border-2 w-full">
            {products.map((product, index) => (
                <div key={product.id}  className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <img className="h-48 w-full object-cover object-center" src={product.image} alt={product.title}/>
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                            {product.title}
                        </h2>
                        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                            {product.description}
                        </p>
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                                ${product.price}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>

    );
}

export default Dashboard;
