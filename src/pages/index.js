import HomeStack from "./Categories";
import components from "../components/constants";
import { useData } from "../api/dataQueries";
import { Spin } from "antd";

// styles
import "../styles/base/index.scss";
import "../styles/layout/index.scss";

export default function MainStack() {
  const { isLoading } = useData();

  if (isLoading) {
    return <Spin size="large" />;
  } else {
    return (
      <div className="App">
        <components.Nav />
        {/* <components.RouteMap /> */}
        <div className="fl-col page-right">
          <components.Header />
          {/* routes */}
          <HomeStack />
        </div>
      </div>
    );
  }
}
