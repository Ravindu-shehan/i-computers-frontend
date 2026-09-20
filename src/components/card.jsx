export default function Card(props){
    return(
        <div className={"w-[200px] h-[300px] m-4 p-4 rounded-lg shadow-lg"} 
        style={
            {
            background : props.color
        }
        }>

        </div>
    )
}




















/*<CiTrash className="hover:text-red-600 cursor-pointer m-3"
              onClick={
                ()=>{
                  const token = localStorage.getItem("token");
                  axios.delete(import.meta.env.VITE_API_URL + "/api/products/" + item.productId,{
                    headers: {
                      Authorization : "Bearer " + token
                    }
                  }).then(
                    ()=>{
                      toast.success("product deleted successfully");
                      setLoading(true)
                    }
                  ).catch(
                    (err)=>{
                      toast.error(err?.response?.data?.message || "Failed to delete product");
                    }
                  )
                }
              } />*/