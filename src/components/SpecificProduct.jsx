import React from 'react'
import { useGetProductByIdQuery } from '../app/service/apiData'

const SpecificProduct = () => {
    const {data,isError,isLoading} = useGetProductByIdQuery(2)
    if(isError){
        alert("we got an error")
    }
    if(isLoading){
        return <h1>Loading . . .. . </h1>
    }
    console.log(data)
  return (
    <>
    <div>
        <h1>{data?.brand}</h1>
        <h2>{data?.id}</h2>
        <p>{data?.description}</p>

    </div>
    </>
  )
}

export default SpecificProduct# Random change 6734
# Random change 24942
# Random change 12778
# Random change 26988
# Random change 26021
# Random change 14446
# Random change 22251
# Random change 22510
