import { useState } from "react";
import { Link ,useParams } from "react-router-dom";


function TourDetails(props){
   const {id}=useParams();
    const [seeMore,setSeeMore]=useState(true);

    let tourDetail=props.data.filter((item)=>{
        return item.id ===id;
    })
    return(
        <div>
            <h1>{tourDetail[0].name}</h1>
            <img src={tourDetail[0].image} alt={tourDetail[0].name} />
            <p>{tourDetail[0].price}</p>
            {seeMore?
                <>
                    <p>{(tourDetail[0].info).substring(0,200)}</p>
                    <button onClick={()=>setSeeMore(false)}> see More</button>
                </>
                :
                <>
                    <p>{(tourDetail[0].info)}</p>
                    <button onClick={()=>setSeeMore(true)}> see Less</button>
                </>
            }
        </div>
    )
}

export default TourDetails;