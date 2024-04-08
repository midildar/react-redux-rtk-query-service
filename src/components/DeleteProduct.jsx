import React from 'react'
import { useDeleteProductMutation } from '../app/service/apiData'

const DeleteProduct = ({productId}) => {
    const [deleteProduct,{data,isError,isLoading}] = useDeleteProductMutation()
    
    if(isError){
        alert("we got an error")
    }
    if(isLoading){
        return <h1>Loading . . .. . </h1>
    }

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(productId)
        } catch (error) {
            alert("we got an error", error);
        }
    }

  return (
    <>
      <h1>{data?.title ? `${data?.title} deleted successfully`: ""}</h1>
      
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </>
  );
}

export default DeleteProduct# Random change 11885
# Random change 32197
# Random change 31478
# Random change 31612
# Random change 1785
# Random change 4712
# Random change 1817
# Random change 11746
