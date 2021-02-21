import { useSelector } from "react-redux";

function SearchBar() {
  const tabState = useSelector((state) => state.searchTab);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {tabState.barber && (
        <div className="search-bar">
          <div className="searchTitle">
            <h1>Barbershop search</h1>
          </div>
          <form className="searchForm" onSubmit={handleSubmit}>
            <button className="modalButton" type="submit">
              Search
            </button>
          </form>
        </div>
      )}
      {tabState.salon && (
        <div className="search-bar">
          <form className="search-form" onSubmit={handleSubmit}>
            <button type="submit" className="searchSubmit">
              <i className="fas fa-search">S</i>
            </button>
          </form>
        </div>
      )}
      {tabState.donation && (
        <div className="search-bar">
          <form className="search-form" onSubmit={handleSubmit}>
            <button type="submit" className="searchSubmit">
              <i className="fas fa-search">D</i>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default SearchBar;
