import '../Css/Tours.css'
import db from '../data/db.json'
function Tours(){
  
    return(

       
        <div className='main'>
          {   db.map((obj)=>(
            <div className='tours'> 
             <h3>{obj.name}</h3>
            <img src={obj.image} alt={obj.name}/>
            </div>
        ))}
          
        </div>
    )
}

export default Tours;