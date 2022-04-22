import axios from "axios"
import { useEffect, useState } from "react"

const LoadData = ()=>{
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/service')
        .then(data => setServices(data.data))
    },[])
    return[services, setServices]
}

export default LoadData