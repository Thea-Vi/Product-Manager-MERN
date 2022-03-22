import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const DisplayProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then(res => {
                console.log("success", res)
                setAllProducts(res.data.results)
            })
            .catch(err => console.log("error", err))

    }, [])


    return (
        <div>
            <h3>All Products:</h3>
            {allProducts.map((product, i) => {
                return (
                    <div key={i}>
                        <h2><Link to={`/products/${product._id}`}>{product.title}</Link></h2>
            
                    </div>
                )

            })}

        </div>
    )
}

export default DisplayProducts