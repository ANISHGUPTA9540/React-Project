import { useState } from "react";
import {IMG_CDN_URL} from "../config";
import {restaurantList} from "../config";
import { useState } from "react";

function filterData(searchText,restaurants){
   const filterData= restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
    return filterData;

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
    const [restaurants,setRestaurants]=useState(restaurantList);
    const [searchText,setSearchText]=useState("");
    return (
        <>
        <div className="search-container">
        <input type="text"
         classname="search-input"
         placeholder="search"
         value={searchText}
         onChange={(e)=>{
            setSearchText(e.target.value);
         }}
        />
        <button className="search-btn" onClick={()=>{
            const data = filterData(searchText,restaurants);
            setRestaurants(data);
        }}>search</button>
    </div>
        
           
            <div className="resturant-list">
                {restaurants.map((restaurant) => {
                    return <ResturantCard {...restaurant.data}/>;

                    })
                }
            </div>
            </>
       
    )
}
export default Body;