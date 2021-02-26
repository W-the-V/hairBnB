import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SpotDetail.css";

function SpotDetail() {
  const spotState = useSelector((state) => state.menu.spot);
  useEffect(() => {
    
  }, []);
  return (
    <div className="SpotDetailShell">
      <div className="SpotDetailInner">IMAGE HERE</div>
    </div>
  );
}
export default SpotDetail;
