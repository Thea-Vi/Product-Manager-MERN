import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {

    const { id } = useParams();

    const [details, setDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log("one product", res)
            setDetails(res.data.results)
        })
        .catch(err => console.log("error", err))
      
    }, [id])

    return(
        <div>
            <h1>{details.title}</h1>
            <p>Price: ${details.price}</p>
            <p>Description:{details.description} </p>

        </div>
    )

   
}

export default Product