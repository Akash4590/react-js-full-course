import { useContext } from "react";
import SubjectContext from "./SubjectContext";

function Subject() {
  const subject = useContext(SubjectContext);

  return (
    <div style={{ backgroundColor: "skyblue", padding: 20 }}>
      <h2>Subject is: {subject || "Not Selected"}</h2>
    </div>
  );
}

export default Subject;