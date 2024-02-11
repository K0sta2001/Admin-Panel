import PlusIcon from "../../assets/images/icons/PlusIcon.js";
import { useData } from "../api/../../api/dataQueries";
import Category from "./Category.js";

export default function HomeStack() {
  // pseudo data
  const { data } = useData();
  //
  const Categories = () => (
    <div className="fl-row categories">
      {data?.categories?.map((category, index) => {
        return <Category segments={category} key={index} />;
      })}
    </div>
  );

  return (
    <div className="fl-col category-container">
      <div className="fl-row header">
        <div className="fl-col text">
          <p>Manage Category Page</p>
          <p>Is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <button className="btn-create-category">
          <PlusIcon />
          <p>Create New Category</p>
        </button>
      </div>
      <Categories />
    </div>
  );
}
