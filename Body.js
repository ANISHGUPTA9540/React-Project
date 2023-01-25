const Searchbar=()=>{
    return(
        <h1>searchbar</h1>
    );
}

const ResturantCard=()=>{
    return(
        <div className="card">
            <h1>image</h1>
            <h2>name</h2>
            <h2>rating</h2>
            <h2>cusine</h2>    
            
        </div>
    );
}

const Body=()=>{
    return(
        <div>
        <Searchbar/>
        <ResturantCard/>
        </div>
    )
}
export default Body;