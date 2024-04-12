import React from "react";
import { useUpdateProductMutation } from "../app/service/apiData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, isError, isLoading }] =
  useUpdateProductMutation()

  if (isError) {
    alert("we got an error");
  }
  if (isLoading) {
    return <h1>Loading . . .. . </h1>;
  }
  console.log(data, productId);

  const handleUpdataProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title Updated !!",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (error) {
      alert("we got an error", error);
    }
  };

  return (
    <>
      <h1>{data?.title}</h1>
      <h2>{data?.id}</h2>
      <p>{data?.brand}</p>
      <button onClick={handleUpdataProduct} disabled={isLoading}>
        Update Product
      </button>
    </>
  );
};

export default UpdateProduct;
# Random change 8104
# Random change 1368
# Random change 23410
# Random change 10132
# Random change 22695
# Random change 6977
# Random change 7688
# Random change 23679
