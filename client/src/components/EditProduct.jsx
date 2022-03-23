import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const EditProduct = () => {

    const { id } = useParams();

    // state variable to save the data received = receives object
    const [editProduct, setEditProduct] = useState({
        title: "",
        price: 0,
        description: "",
        isRecommended: false,
    })

    const history = useHistory();
    

    const editHandler = (e) => {
        if (e.target.type === "checkbox") {
            setEditProduct({
                ...editProduct,
                [e.target.name]: e.target.checked
            })
        } else {
            setEditProduct({
                ...editProduct,
                [e.target.name]: e.target.value
            })
        }


    }


    // get request first to populate info, put request when submitting form
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log("update product", res)
                setEditProduct(res.data.results)
            })
            .catch(err => console.log("error", err))

    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, editProduct)
            .then(res => {
                console.log("update product", res)
                // redirect
                history.push("/")
            })
            .catch(err => console.log("error", err))

    }




    return (
        <div>
            <h1>Product Manager</h1>
            <h3>Edit Product</h3>
            <form className='form-group' onSubmit={updateHandler}>
                <p>
                    <label>Title</label>
                    <input onChange={editHandler} type="text" name="title" id="" value={editProduct.title} />
                </p>
                <p>
                    <label>Price</label>
                    <input onChange={editHandler} type="number" name="price" id="" value={editProduct.price} />
                </p>
                <p>
                    <label>Description</label>
                    <input onChange={editHandler} type="text" name="description" id="" value={editProduct.description} />
                </p>
                <p>
                    <label>Is Recommended</label>
                    <input onChange={editHandler} type="checkbox" name="isRecommended" checked={editProduct.isRecommended} />
                </p>

                <button className="btn btn-primary">Update</button> 
 

            </form>
        </div>
    )
}
export default EditProduct