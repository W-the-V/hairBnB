import { useDispatch } from "react-redux";
import {
  barberToggle,
  salonToggle,
  donationToggle,
} from "../../store/searchTab";

function SearchTabs() {
  const dispatch = useDispatch();
  return (
    <div className="searchTabs">
      <button
        className="navButton searchButton"
        onClick={() => dispatch(barberToggle())}
      >
        Barbershops
      </button>
      <button
        className="navButton searchButton"
        onClick={() => dispatch(salonToggle())}
      >
        Salons
      </button>
      <button
        className="navButton searchButton"
        onClick={() => dispatch(donationToggle())}
      >
        Hair Donation
      </button>
    </div>
  );
}
export default SearchTabs;
