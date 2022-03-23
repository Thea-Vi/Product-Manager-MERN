import React, { useState } from 'react';
import axios from 'axios';
// import axios


const ProductForm = () => {


    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [isRecommended, setIsRecommended] = useState(false)

    const [errorForm, setErrorForm] = useState({})

    const submitProductHandler = (e) => {
        e.preventDefault();
        // console.log(title, price, description)
        /* after setting the state variables
        - check the state in components if they react on ===> onChange
      */
        //  inputs from the form - object
        const productData = { title, price, description, isRecommended }
        // console.log(productData)

        // remember http://  productdata --> inputs from form
        axios.post("http://localhost:8000/api/products/", productData)
            .then(res => {
                console.log("post data", res)
                if (res.data.error)
                    setErrorForm(res.data.error.errors)
                // check state -- if it captures the errors
            })
            .catch(err => console.log("error", err))


    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitProductHandler} className='form-group'>
                <div>
                    <label>Title</label>
                    <input onChange={e => setTitle(e.target.value)} type="text" name="" id="" />
                    <p className='text-danger'>{errorForm.title ? errorForm.title.message : ""}</p>

                </div>
                <div>
                    <label>Price</label>
                    <input onChange={e => setPrice(e.target.value)} type="number" name="" id="" />
                    <p className='text-danger'>{errorForm.title ? errorForm.title.message : ""}</p>

                </div>
                <div>
                    <label>Description</label>
                    <input onChange={e => setDescription(e.target.value)} type="text" name="" id="" />
                    <p className='text-danger'>{errorForm.title ? errorForm.title.message : ""}</p>

                </div>
                <div>
                    <label>Is Recommended</label>
                    <input onChange={e => setIsRecommended(e.target.checked)} type="checkbox" name="" id="" />
                </div>

                <button className="btn btn-primary">Create</button>

            </form>
        </div>
    )
}

export default ProductForm