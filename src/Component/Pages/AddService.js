import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:4000/service`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        // axios.post('http://localhost:4000/service')
        .then(result => console.log(result))
    };
    return (
        <div>
            <h2>add service</h2>
            <form className="mt-16 text-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2 grid grid-cols-3 md:grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name"> Name <span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-52 md:w-3/4 border-gray-500 mr-4 flex justify-start" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                </div>
                <div className="mt-2 grid grid-cols-3 md:grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name"> Photo URL <span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-52 md:w-3/4 border-gray-500 mr-4 flex justify-start" placeholder='img' type='text' {...register("img")} />
                </div>
                <div className="mt-2 grid grid-cols-3 md:grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Price<span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-52 md:w-3/4 border-gray-500 mr-4 flex justify-start" placeholder='Price' type="number" required {...register("price", { min: 18, max: 99 })} />
                </div>
                <div className="mt-2 grid grid-cols-3 md:grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Description <span className="text-red-600 font-semibold">*</span></label>
                        <textarea className="border-2 rounded px-2 h-20 w-52 md:w-3/4 border-gray-500 mr-4 flex justify-start" placeholder='Description' required {...register("description")} />
                </div>
                
                <div className="my-2"><input className='bg-neutral-400 p-1 w-1/4 rounded font-semibold hover:bg-green-400 hover:text-white duration-300'  type="submit" value="Add Service" /></div>
            </form>
        </div>
    );
};

export default AddService;