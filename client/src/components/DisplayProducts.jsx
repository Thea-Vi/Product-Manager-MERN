import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const DisplayProducts = () => {

    const [allProducts, setAllProducts] = useState([])
    let [deleted, setDeleted] = useState(false)
    // get all
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then(res => {
                console.log("success", res)
                setAllProducts(res.data.results)
            })
            .catch(err => console.log("error", err))

    }, [deleted])

    // delete
    const deleteProduct = (prodId) => {
        axios.delete(`http://localhost:8000/api/products/${prodId}`)
            .then(res => {
                console.log("delete product", res)
                setDeleted(!deleted)



            })
            .catch(err => console.log("error", err))



    }


    return (
        <div>
            <h3>All Products:</h3>
            {allProducts.map((product, i) => {
                return (
                    <div key={i}>
                        <h2>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </h2>

                        <Link to={`/products/${product._id}`} className='btn btn-success'>Details</Link> &nbsp;
                        <Link to={`/products/edit/${product._id}`} className='btn btn-warning'>Edit</Link> &nbsp;
                        <button onClick={() => deleteProduct(product._id)} className="btn btn-danger">Delete</button>
                        <p>Created on: {product.createdAt}</p>


                    </div>
                )

            })}

        </div>
    )
}

export default DisplayProducts