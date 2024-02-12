import { useState } from "react";
import HomeStack from "./Categories";
import components from "../components/constants";
import { useData } from "../api/dataQueries";
import { Spin } from "antd";

// styles
import "../styles/base/index.scss";
import "../styles/layout/index.scss";

export default function MainStack() {
  // shared data
  const [routeMap, setRouteMap] = useState(null);
  const displayRouteMap = (r) => {
    if (!routeMap) {
      setRouteMap(r);
    } else if (r === routeMap) {
      setRouteMap(null);
    }
  };
  //
  // console.log(routeMap);
  const { isLoading } = useData();

  if (isLoading) {
    return <Spin size="large" />;
  } else {
    return (
      <div className="App">
        <components.Nav displayRouteMap={displayRouteMap} />
        <components.RouteMap
          routes={routeMap?.routes}
          title={routeMap?.label}
        />
        <div className="fl-col page-right">
          <components.Header />
          <HomeStack />
        </div>
      </div>
    );
  }
}
