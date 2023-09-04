function Menu (props) {
    return <div className ="parent" >
    
        <img src={props.image} />
        
    <div>
    <h3> {props.name} </h3>
    <p> {props.option} </p>
    <h3> {props.price} </h3>
    <button>order now </button>
    </div>
    </div>
}
export default Menu