import React, { useState } from 'react';
import axios from 'axios';
// import axios


const ProductForm = () => {


    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const submitProductHandler = (e) => {
        e.preventDefault();
        // console.log(title, price, description)
        /* after setting the state variables
        - check the state in components if they react on ===> onChange
      */
        //  inputs from the form - object
        const productData = { title, price, description }
        // console.log(productData)

        // remember http://  productdata --> inputs from form
        axios.post("http://localhost:8000/api/products/", productData)
            .then(res => console.log("success", res))
            .catch(err => console.log("error", err))


    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitProductHandler} className='form-group'>
                <p>
                    <label>Title</label>
                    <input onChange={e => setTitle(e.target.value)} type="text" name="" id="" />
                </p>
                <p>
                    <label>Price</label>
                    <input onChange={e => setPrice(e.target.value)} type="number" name="" id="" />
                </p>
                <p>
                    <label>Description</label>
                    <input onChange={e => setDescription(e.target.value)} type="text" name="" id="" />
                </p>
                <button className="btn btn-primary">Create</button>

            </form>
        </div>
    )
}

export default ProductForm