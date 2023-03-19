export default function Grid({ grid, addValue }) {
  return (
    <div className="grid">
      {grid.map(({ icon }, index) => (
        <button
          key={index}
          disabled={icon}
          onClick={() => addValue(index)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0,0,0,0.43)",
            height: 50,
            width: 50
          }}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
