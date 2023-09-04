import Footer from "../component/footer"
import Header from "../component/Header"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function Product(){

    const [products, setProducts]= useState([])
    const getAllProducts = () => {
        axios.get("https://fakestoreapi.com/products").then((Response) =>{
            setProducts(Response.data)

    }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() =>{
        getAllProducts()
    },[])

    return <div>

        <Header />
    <div style={{display:"grid",gridTemplateColumns:"300px 300px 300px", justifyContent:"center" }}>
        {
            products.map((item,index) => (
                <div style={{border:"2px solid", width:"100%", textAlign:"center" }}>
                    <img style={{width:"200px"}} src={item.image} />
                <p style={{}}>{item.title}</p>
                <h4 style={{border:"0px solid", backgroundColor:"green", borderRadius:"100%"}}>{item.price}</h4>
                <button style={{backgroundColor:"orangered", width:"100%"}}>Buy now</button>

                </div>
            

            ))
}
            

        
            



    
    </div>

        <Footer />
    </div>

}



export default Product