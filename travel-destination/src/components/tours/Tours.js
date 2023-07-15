import { Link } from 'react-router-dom';
import './Tours.css'
import Tour from './tour/Tour';
function Tours(props){
  
    return(

       <div className='main'>
        {
            props.data.map((obj,i)=>(
                <Link key ={i} to={`/city/${obj.id}`}>
                    <Tour  tour={obj}/>
                </Link>
            ))
        }
        
       </div>
       
    )
}

export default Tours;