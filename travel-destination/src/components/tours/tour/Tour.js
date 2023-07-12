import './Tour.css'

function Tour(props){
    return(
        <div className='main'>
          {   props.tour.map((obj,i)=>(
            <div  key={i} className='tours'> 
             <h3>{obj.name}</h3>
            <img src={obj.image} alt={obj.name}/>
            </div>
        ))}
          
        </div>
    )
}

export default Tour;