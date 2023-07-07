import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ name, cuisines, rating, imageId }) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={`${CDN_URL}${imageId}`} />
      <p>{name}</p>
      <p>Cuisines: {cuisines?.join(', ')}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default RestaurantCard;