import { PlusOutlined } from "@ant-design/icons";

export default function PlusIcon({ textColor }) {
  return (
    <div
      className="fl-col"
      style={{
        fontSize: "10px",
        borderRadius: "30%",
        padding: "4.4px",
        border: "2.3px solid #5B5D66",
        background: "white",
      }}
    >
      <PlusOutlined style={{ color: !textColor ? "#5B5D66" : textColor }} />
    </div>
  );
}
