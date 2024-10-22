export default function docs({params}:{
    params : {
        slug : string[];
    }
}){
    console.log("slug : ", params.slug)
    if(params.slug?.length === 2){
        return(<>
        <h1>docs views features : {params.slug[0]}, and concept : {params.slug[1]}</h1>
        </>)
    }else if(params.slug?.length == 1){
        return <h1>docs views features : {params.slug[0]}</h1>
    }
    return <h1> docs view only</h1>
    
}