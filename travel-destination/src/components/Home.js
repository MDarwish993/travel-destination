import Header from './Header';
import Footer from './Footer';
import Tours from './Tours';
import db from '../data/db.json'
import '../Css/Home.css'
function Home(){
    return(
        <div className='home'>
             <Header />

             <div className='main'>
             {
            db.map((obj,i)=>(
                <Tours key={i} name={obj.name} image={obj.image}/>
            ))
        }
             </div>

        
        
        <Footer />
        </div>
       
    );
}

export default Home;