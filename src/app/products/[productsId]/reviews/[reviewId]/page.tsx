export default async function ReviewDetails({
    params,
}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
    // Since params are async, await them before using.
    console.log("params : ",params);
    
    const { productId , reviewId} =  await params;
    

    console.log("Review ID is:", reviewId);
    console.log("productId ID is:", productId);

    return (
        <h1>
            Review ID: {reviewId}, Product ID: {productId}
        </h1>
    );
}



// export default async  function ReviewDetails({params}:{
//     params : {
       
//         reviewId : string;
//         productId : string;
//     }
// }){
//     // Since params are async, await them before using.
//     const { productId, reviewId } = params;

//     console.log("review id is : ", reviewId)
//     console.log("productId : ", productId)
//     return (
//         <h1> reviewId : {reviewId}, productId : {productId}</h1>
//     )
// }