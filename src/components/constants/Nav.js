// styles + images
import "../../styles/components/Constants.scss";
import logo from "../../assets/images/icons/MainLogo.svg";
import routes from "../../navigation/nav";
import info from "../../assets/images/icons/Info-Square.svg";

// version
import packageJson from "../../../package.json";

export default function Nav() {
  const Navigations = () => {
    return (
      <div className="fl-col navigations">
        {routes.map((route, index) => {
          return (
            <div className="fl-row navigation" key={index}>
              <img src={route.src} alt={index}></img>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fl-col nav-container">
      <div className="fl-col logo-container">
        <img src={logo} alt="logo"></img>
      </div>
      <Navigations />
      <div className="fl-col info-container">
        <img src={info} alt="info"></img>
        <p>{packageJson.version}</p>
      </div>
    </div>
  );
}
