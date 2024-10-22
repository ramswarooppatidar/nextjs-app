export default async function ProductDetails({params} : {
    params : {
        productId :string;
    }
}){
    console.log("params : ",params);
    
    const { productId} =  await params;
    console.log("productId :", productId)
    
    return (
        <>
        <h1>direct parents of productId , {params.productId} </h1>
        </>
    )
}