import './Tour.css'

function Tour(props){
    return(
        
            <div className='tours'> 
             <h3>{props.tour.name}</h3>
            <img src={props.tour.image} alt={props.tour.name}/>
            </div>
    )
}

export default Tour;