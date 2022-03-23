import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Product = () => {

    const { id } = useParams();

    const history = useHistory();
    // this id is used on the endpoint axios call

    // state variable to save the data received = receives object
    // use array when -- get all objects
    const [details, setDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log("one product", res)
            setDetails(res.data.results)
        })
        .catch(err => console.log("error", err))
      
    }, [])

    const deleteProduct = () => {
        console.log("delete product")
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log("delete product", res)
            // redirect
            history.push("/")
        })
        .catch(err => console.log("error", err))
    
      
    }

    return(
        <div>
            <h1>{details.title}</h1>
            <p>Price: ${details.price}</p>
            <p>Description: {details.description} </p>
            <p>Recommend: {details.isRecommended ? "Is Recommended": "Not Recommended"}</p>
            <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
            <p>Created on: {details.createdAt}</p>

        </div>
    )

   
}

export default Product