import searchIcon from "../../assets/images/icons/Search.svg";

// styles + images
import "../../styles/components/Reusables.scss";

export default function Search() {
  return (
    <div className="fl-row search-container">
      <img src={searchIcon} alt="S"></img>
      <input
        className="search-input"
        placeholder="Search for the desired information"
      ></input>
    </div>
  );
}
