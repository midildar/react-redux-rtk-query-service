import React from 'react'
import { useAddNewProductMutation } from '../app/service/apiData'

const AddNewProduct = () => {
    const [AddNewProduct,{data,isError,isLoading}] = useAddNewProductMutation()
    if(isError){
        alert("we got an error")
    }
    if(isLoading){
        return <h1>Loading . . .. . </h1>
    }

    const handleAddProduct = async () =>{
        try {
            const newProductData = {
                id: 1,
                title: "Amazing Sound Bar",
                description: "This is one of the best soundbar in the market"
            }
            
            await AddNewProduct(newProductData)

        } catch (error) {
            alert("we got an error",error)
        }
    }

  return (
    <>
    <button onClick={handleAddProduct} disabled={isLoading}>Add new Product</button>
        <h1>{data?.brand}</h1>
        <h2>{data?.id}</h2>
        <p>{data?.description}</p>
    </>
  )
}

export default AddNewProduct# Random change 15228
# Random change 24036
# Random change 11454
# Random change 20876
# Random change 29771
# Random change 18044
# Random change 32180
# Random change 22791
