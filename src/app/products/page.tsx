export default async function ProductDetails({params}:{
    params : {
        productId : string;
    }
}){
    
    console.log("productId :", params.productId)
    return (
        <>
        <h1> direct parent of product, {params.productId}</h1>
        <h1></h1>
        </>
    )
}