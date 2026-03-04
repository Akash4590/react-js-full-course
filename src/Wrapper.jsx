<<<<<<< HEAD
function Wrapper({children,color }) {
  return (
    <div
      style={{
        color: color||"green",
        border: "3px solid black",
        width: "300px",
        margin:"10px"
      }}
    >
      {children}
    </div>
  );
}

=======
function Wrapper({children,color }) {
  return (
    <div
      style={{
        color: color||"green",
        border: "3px solid black",
        width: "300px",
        margin:"10px"
      }}
    >
      {children}
    </div>
  );
}

>>>>>>> 3bd138d8b9166bf31ec01790d63cad819c170271
export default Wrapper;