import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
                    <div>
                        <h2>{product.title}</h2>
                        <p>Price:{product.price}</p>
                        <p>Description: {product.description}</p>
                    </div>
                )

            })}

        </div>
    )
}

export default DisplayProducts