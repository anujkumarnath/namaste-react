import RestaurantCard from "./RestaurantCard";

/* Using our own data now */
let restaurants = [
  {
    "data": {
      "id": "678813",
      "name": "Thali Express",
      "cloudinaryImageId": "41d01adbd2c44b1cac2e8a1d7df9d11e",
      "avgRating": "3.5",
      "cuisines": [
        "Thalis",
        "Indian",
        "Chinese",
        "Biryani"
      ],
    },
  },
  {
    "data": {
      "id": "594715",
      "name": "Big Bowl",
      "cloudinaryImageId": "992f217c2f122c0d8fc385855ca30722",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": "3.6",
    },
  },
  {
    "data": {
      "id": "583088",
      "name": "Simple Burger",
      "cloudinaryImageId": "d3to7amcs0pu8jwauayb",
      "cuisines": [
        "Burgers",
        "Snacks",
        "Beverages",
        "Asian",
        "Italian"
      ],
      "avgRating": "4.2",
    },
  }
]

const Body = () => {
  return (
    <div className="app-body">
      <div className="filter">
        {/* We are filtering out the restaurants on button click but the ui doesn't update */}
        <button onClick={() => {
          restaurants = restaurants.filter(restaurant => restaurant.data.avgRating >= 4);
          console.log(restaurants);
        }}>Filter</button>
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