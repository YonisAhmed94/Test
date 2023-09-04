function Tech (props){
    return<div className="yo">
        <img src={props.img} />
        <div>
            <button>{props.name}</button>
            <p>{props.option}</p>
           
            
        
        
        <div className="profile">
        <img src={props.riix} />
        <div className="title">
        <h3>{props.price}</h3>
            <p>{props.hours}</p>
            </div>

           
        </div>

    </div>
    </div>
}
export default Tech