import {IMG_CDN_URL} from "./contant";
import {restaurantList} from "./contant";

const Searchbar = () => {
    return (
        <h1>searchbar</h1>
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