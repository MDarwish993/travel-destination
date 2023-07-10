import Header from './Header';
import Footer from './Footer';
import Tours from './Tours';

import '../Css/Home.css'
function Home(){
    return(
        <div className='home'>
             <Header />
                <Tours />
             <Footer />
        </div>
       
    );
}

export default Home;