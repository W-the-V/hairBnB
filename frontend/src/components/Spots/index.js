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
        <div className="partialLineBox">
          <div className="spotType">
            {spot.type} at {spot.address}
          </div>
        </div>
        <div className="partialLineBox">
          <div className="spotTitle">{spot.name}</div>
        </div>
        <div className="partialLineBox">
          <div className="partialLine"></div>
        </div>
        <div className="partialLineBox">
          <div className="amenitiesList"> List of amenities</div>
        </div>
        <div className="ratingPriceBox">
          <div className="spotRating">
            {" "}
            <i className="fas fa-star"></i>
            {"5   (100)"}
          </div>
          <div className="spotPrice">${spot.price}</div>
        </div>
      </div>
    </button>
  );
}
export default Spots;
