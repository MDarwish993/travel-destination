import '../Css/Tours.css'
import db from '../data/db.json'
function Tours(){
  
    return(

       
        <div className='main'>
          {   db.map((obj,i)=>(
            <div  key={i} className='tours'> 
             <h3>{obj.name}</h3>
            <img src={obj.image} alt={obj.name}/>
            </div>
        ))}
          
        </div>
    )
}

export default Tours;