import '../Css/Tours.css'

function Tours(props){
    return(
        <div className='tours'>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name}/>
        </div>
    )
}

export default Tours;