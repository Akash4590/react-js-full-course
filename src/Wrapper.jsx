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

export default Wrapper;