import { List } from "react-virtualized";

const rowRenderer = ({ index, key, style }) => (
  <div
    key={key}
    style={{
      ...style,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid blue",
        borderRadius: 4,
        flexDirection: "column",
        backgroundColor: "gray",
        padding: "5px 0",
      }}
    >
      <div>Name: Item {index + 1}</div>
      <div>ID: {index + 1}</div>
    </div>
  </div>
);

const VirtualizedList = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div
      style={{
        display: "flex",
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 6,
      }}
    >
      Virtualized List
    </div>
    <div style={{ display: "flex", marginBottom: 16 }}>
      (using react-virtualized)
    </div>
    <List
      width={400}
      height={600}
      rowHeight={60}
      rowRenderer={rowRenderer}
      rowCount={1000}
    />
  </div>
);
export default VirtualizedList;
