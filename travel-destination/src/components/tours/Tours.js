import './Tours.css'
import db from '../../data/db.json'
import Tour from './tour/Tour';
function Tours(){
  
    return(

       <div>
        <Tour tour={db}/>
       </div>
       
    )
}

export default Tours;