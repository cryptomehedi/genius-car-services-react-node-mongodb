import React from 'react';
import LoadData from '../hooks/LoadData';

const ManegeServices = () => {
    const [services, setServices] = LoadData()

    const handleUserDelete =id=>{
        const proceed = window.confirm('are you sure you want to delete this')
        if(proceed){
            const url = `http://localhost:4000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
            })
        }
    }
    return (
        <div>
            {
                services.map((service) =>
                <div key={service._id}>
                    <p>Name: {service.name}</p>
                    <p>Price: ${service.price}</p>
                    <button onClick={()=>{handleUserDelete(service._id)}} className='bg-neutral-400 p-1 my-1 rounded-lg hover:bg-green-300 mx-3'>Delete</button>
                </div>
                )
            }
        </div>
    );
};

export default ManegeServices;