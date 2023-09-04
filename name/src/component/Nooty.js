import Header from "../component/Header"
import { useState } from "react";




function Nooty (){
    const [item, setItem] = useState("")
    const [list, setList] = useState([])
    const getUserData =(e) => {

        e.preventDefault()

        if(item){
            setList([...list, item])
        }

        setItem("")

    }
    
        




    return <div >

    

    <Header />

    <form style={{textAlign: "center", marginTop: "20px"}}>
    <input value={item}
     onChange={(event)  => {
        setItem(event.target.value)
     }}
     style={{width: "260px" , height: "40px" }} type="text" placeholder="enter item"   />

    <button onClick={getUserData} style={{padding: "14px", marginLeft: "10px", backgroundColor:"orange", border: "none", borderRadius:"4px", color:"white"}}>
        add item
    </button>
    </form>
    <div style={{textAlign: "center", margin:"20px 35%"}}>
        {
            list.map((item, index) => (

    <p style={{backgroundColor:"orange", padding: "12px" }}>
        {item}
        {
            console.log(index)
        }
    </p>

            ))
    }
            



 </div>
    
    </div>
}
 

export default Nooty;