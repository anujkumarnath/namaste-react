import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mock-data";

const Body = () => {
  return (
    <div className="app-body">
      <div className="search-bar">
        <input />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.data.id}
                name={restaurant.data.name}
                cuisines={restaurant.data.cuisines}
                rating={restaurant.data.avgRating}
                imageId={restaurant.data.cloudinaryImageId}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;