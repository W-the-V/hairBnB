import { useSelector, useDispatch } from "react-redux";
function SearchBar() {
  const tabState = useSelector((state) => state.searchTab);

  return(
    <>
      {tabState.barber &&
      <div className="search-bar">
        
      </div>}
    </>
  )
}
export default SearchBar;
