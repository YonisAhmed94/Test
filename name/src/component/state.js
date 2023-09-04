import {useState, React} from "react"


    function State(){
        
    
    const [counter,setCounter] = useState(0)
    const [color, setColor] = useState("")

const incrementBtn = () =>{
    setCounter(counter+1)
    if (counter===9){
    setColor("red")
    }
else {
    setColor("white")
}
}
const resetBtn = () => {
    setCounter(0)
}
const decrementBtn = () => {
    if(counter > 0){
    setCounter(counter-1)
    }
}


    return <div className="box">
    <h1>{counter}</h1>
 <button onClick={incrementBtn}className="incrementation" style={{backgroundColor:color}}>incriment</button>
 <button onClick={resetBtn}className="reset">reset</button>
 <button onClick={decrementBtn}className="reset">devrement</button>
    

    
    </div>
}
export default State