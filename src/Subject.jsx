<<<<<<< HEAD
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

=======
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

>>>>>>> 3bd138d8b9166bf31ec01790d63cad819c170271
export default Subject;