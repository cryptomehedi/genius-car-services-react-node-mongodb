
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/service/${serviceId}`)
        .then(data => setService(data.data))
    },[serviceId])
    return (
        <div>
            <Helmet>
                <title>Product - Genius Car Services</title>
            </Helmet>
            <h2>This is a service detail {service.name}</h2>
            <div className='text-center mt-10'> <Link className=" border bg-red-300 p-2" to={'/checkout'}>checkOut</Link></div>
        </div>
    );
};

export default ServiceDetail;