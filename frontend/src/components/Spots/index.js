import "./Spots.css";
import { useDispatch, useSelector } from "react-redux";
import { showSpot } from "../../store/showMenu";
function Spots({ spot }) {
  const dispatch = useDispatch();
  const id = spot.id;
  return (
    <button className="spotBox" onClick={(e) => dispatch(showSpot(id))}>
      <div className="spotImage">IMAGE HERE</div>
      <div className="spotInner">
        <div className="spotType">
          {spot.type} at {spot.address}
        </div>
        <div className="spotTitle">{spot.name}</div>
        <div className="amenitiesList"> List of amenities</div>
        <div className="spotRating"> Star, Rating, review number</div>
        <div className="spotPrice">${spot.price}</div>
      </div>
    </button>
  );
}
export default Spots;
