import { useState } from "react";
// styles + images
import "../../styles/components/Constants.scss";
import logo from "../../assets/images/icons/MainLogo.svg";
import routes from "../../navigation/nav";
import info from "../../assets/images/icons/Info-Square.svg";

// version
import packageJson from "../../../package.json";

export default function Nav({ displayRouteMap, routeMap }) {
  const [borderStates, setBorderStates] = useState(
    Array(routes.length).fill(false)
  );
  const [imageOpacities, setImageOpacities] = useState(
    Array(routes.length).fill(1)
  );

  const toggleBorderAndOpacity = (index) => {
    const newBorderStates = [...borderStates];
    const newImageOpacities = [...imageOpacities];

    newBorderStates[index] = !newBorderStates[index];
    newImageOpacities[index] = newBorderStates[index] ? 0.6 : 1;

    setBorderStates(newBorderStates);
    setImageOpacities(newImageOpacities);
  };
  // set route map
  const Navigations = () => {
    return (
      <div className="fl-col navigations">
        {routes.map((route, index) => {
          return (
            <div
              className="fl-row navigation"
              key={index}
              style={{
                borderLeft: borderStates[index] ? "2px solid #6471ff" : "none",
              }}
              onClick={() => {
                displayRouteMap(route?.content);
                if (routeMap && route?.content === routeMap) {
                  toggleBorderAndOpacity(index);
                } else if (!routeMap) {
                  toggleBorderAndOpacity(index);
                }
              }}
            >
              <img
                src={route.src}
                alt={index}
                style={{ opacity: imageOpacities[index] }}
                onClick={() => {
                  if (routeMap && route?.content === routeMap) {
                    toggleBorderAndOpacity(index);
                  } else if (!routeMap) {
                    toggleBorderAndOpacity(index);
                  }
                }}
              ></img>
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
