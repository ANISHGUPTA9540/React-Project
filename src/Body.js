import { useState } from "react";
import {IMG_CDN_URL} from "../config";
import {restaurantList} from "../config";
import { useState } from "react";

const Searchbar = () => {
    const [searchText,setsearchText]=useState("india");
    const [input,setinput]=useState("false");
    
    return (
        <div className="search-container">
            <input type="text"
             classname="search-input"
             placeholder="search"
             value={searchText}
             onClick={(e)=>{
                setsearchText(e.target.value);
             }}
            />
            <button className="search-btn">search</button>
            <h1>{input}</h1>
            <button onClick={()=>{
            if (input==="false"){
                setinput("true");
            }else {   
                    setinput("false");

                }
            }}
            >search</button>
        </div>
    );
}

// const Burgerking = {
//     name: "Burger King",
//     image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hqw59kyc3plrht1diqlz",
//     cusine: ["Burger", "American"],
//     rating: 4.2,
// }

const ResturantCard = ({cloudinaryImageId,name,cuisines,totalRatingsString}) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{totalRatingsString} minute</h4>
        </div>
 )
}



const Body = () => {
    return (
        <>
            <Searchbar />
            <div className="resturant-list">
                {
                 restaurantList.map((restaurant) => {
                    return <ResturantCard {...restaurant.data}/>;

                    })
                }
            </div>
                
        </>
    )
}
export default Body;