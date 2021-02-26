import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SpotDetail.css";

function SpotDetail() {
  const id = useSelector((state) => state.menu.spot.id);
  const spots = useSelector((state) => state.spotState.spots);
  let spot;
  if (spots) {
    spot = spots.find((spot) => spot.id === id);
  }
  return (
    <div className="SpotDetailShell">
      <div>{spot?.name}</div>
    </div>
  );
}
export default SpotDetail;
