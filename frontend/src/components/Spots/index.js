import "./Spots.css";
import { useDispatch, useSelector } from "react-redux";
import { showSpot } from "../../store/showMenu";
function Spots() {
  const dispatch = useDispatch();
  const id = 1;
  return (
    <button className="spotBox" onClick={(e) => dispatch(showSpot(id))}>
      <div className="spotImage">IMAGE HERE</div>
      <div className="spotInner">
        <div className="spotType">Type and location</div>
        <div className="spotTitle">Spot Title</div>
        <div className="amenitiesList"> List of amenities</div>
        <div className="spotRating"> Star, Rating, review number</div>
        <div className="spotPrice">Spot price</div>
      </div>
    </button>
  );
}
export default Spots;
