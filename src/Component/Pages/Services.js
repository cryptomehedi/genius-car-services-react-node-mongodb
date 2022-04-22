import React from 'react';
import LoadData from '../hooks/LoadData';
import Service from './Service';


const Services = () => {
    const [services] = LoadData([])
    
    return (
        <div>
            <h2 className='font-semibold text-center text-4xl my-6'>Our service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {
                    services.map(service => <Service service={service} key={service._id} />)
                }
            </div>
        </div>
    );
};

export default Services;