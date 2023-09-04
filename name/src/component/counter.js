import {React, useState } from "react"

function Counter(){
    const [Index, setIndex] = useState(0)
    const [color, setColor] = useState("")
    const xigmad = [
      "  1. habar fadhido lagdin la fududaa............",


"2. Biyo sacabadaada baa looga dhargaaa........",


"3. Talo walaal diide taagoogta ayuu kajabaa...",


"4. Mukulaal mininkeeda joogta miciyo libaax bay leedahay....",


"5. waayeel tag lama dhaho ee wuxuu ku tago ayaa la tusiya....",


"6. cimrigaaga  oo dheerada geel dhalayo ayuu ku tusaa.....",

    ]

const nexBtn = () => {
    if (Index < xigmad.length - 1){
        setIndex(Index+1)
        setColor("red")
    }
}

const preveiwsBtn = () => {
    if(Index > 0){
    setIndex(Index-1)
    setColor("yellow")
    }

}

    return<div className="ptn">
        <p  style={{backgroundColor:color}}>{xigmad[Index]}</p>
        <div className="btn">
            <button onClick={preveiwsBtn}  >preveiws</button>
            {<button onClick={nexBtn} >next</button> }
        </div>
    </div>
}

export default Counter