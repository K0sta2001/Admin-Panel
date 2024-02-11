import SearchInput from "../reusable/Search.js";
import { useData } from "../api/../../api/dataQueries";

// assets + styles
import "../../styles/components/Constants.scss";
import profileImg from "../../assets/images/data/Profile.svg";

export default function Header() {
  // pseudo data
  const { data } = useData();
  //
  const Profile = () => {
    const { profile } = data;
    return (
      <div className="fl-row profile-container">
        <div className="fl-col" style={{ alignItems: "flex-end" }}>
          <p>{profile?.name + " " + profile?.lastName}</p>
          <p>{profile?.email}</p>
        </div>
        <img src={profileImg} alt="user"></img>
      </div>
    );
  };

  return (
    <div className="fl-row header-container">
      <SearchInput />
      <Profile />
    </div>
  );
}
