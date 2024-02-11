// assets + styles
import deleteIc from "../../assets/images/icons/Delete.svg";
import editIc from "../../assets/images/icons/Edit.svg";
import folderIc from "../../assets/images/icons/Folder.svg";
import arrowDownIc from "../../assets/images/icons/Arrow-Down.svg";
import PlusIcon from "../../assets/images/icons/PlusIcon";

export default function Category({ segments }) {
  return (
    <div className="fl-col Category">
      <div className="fl-col" style={{ rowGap: 15, width: "100%" }}>
        <div
          className="fl-row"
          style={{
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="fl-row" style={{ columnGap: 21 }}>
            <img src={arrowDownIc} alt="vector"></img>
            <div className="fl-row" style={{ columnGap: 16 }}>
              <img src={folderIc} alt="folder"></img>
              <p className="first-text">New Collection</p>
            </div>
          </div>
          <div className="fl-row" style={{ columnGap: 19 }}>
            <img src={deleteIc} alt="del"></img>
            <img src={editIc} alt="edit"></img>
          </div>
        </div>
        <div
          className="fl-row"
          style={{
            columnGap: 16,
            width: "60%",
            backgroundColor: segments === "July" ? "#F7F7F7" : "",
            padding: "0px 4px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
          >
            <circle cx="1.5" cy="2" r="1.5" fill="#C7C8CA" />
            <circle cx="7.5" cy="2" r="1.5" fill="#C7C8CA" />
            <circle cx="1.5" cy="8" r="1.5" fill="#C7C8CA" />
            <circle cx="7.5" cy="8" r="1.5" fill="#C7C8CA" />
            <circle cx="1.5" cy="14" r="1.5" fill="#C7C8CA" />
            <circle cx="7.5" cy="14" r="1.5" fill="#C7C8CA" />
          </svg>
          <p className="segment">{segments + " Articles"}</p>
          <div
            className="fl-row"
            style={{ columnGap: 12, transform: "translateX(28px)" }}
          >
            <img src={editIc} alt="edit"></img>
            <img src={deleteIc} alt="del"></img>
          </div>
        </div>
      </div>
      <div className="fl-col" style={{ rowGap: 5, width: "100%" }}>
        <div className="fl-row" style={{ width: "107%", columnGap: 12 }}>
          <p className="instruction">Add New Collection</p>
          <PlusIcon textColor={"#130F26"} />
          <div
            style={{
              height: "1px",
              width: "55%",
              borderBottom: "1px solid #F0F0F0",
              overlay: "hidden",
            }}
          ></div>
        </div>
        <p className="description">
          Drag treeNode to insert after the other treeNode.
        </p>
      </div>
    </div>
  );
}
