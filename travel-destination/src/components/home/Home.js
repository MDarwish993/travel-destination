import Tours from '../tours/Tours';
import './Home.css'

function Home(props){
    return(
        <div className='home'>
             
                <Tours data={props.data}/>
            
        </div>
       
    );
}

export default Home;