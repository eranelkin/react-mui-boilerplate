import React from "react";
import usePaginatedFetch from "./usePaginatedFetch"; // Assuming you save the hook in a file named usePaginatedFetch.js

function PaginatedFetch() {
  const { data, loading, hasMore, lastItemRef } = usePaginatedFetch(0, 15); // Start at 0, fetch 15 items per page

  return (
    <div>
      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: 24,
          marginBottom: 40,
        }}
      >
        Paginated Fetch
      </div>
      <div
        style={{
          maxHeight: "590px",
          minWidth: 500,
          overflowY: "scroll",
          border: "1px solid #ccc",
        }}
      >
        {data.map((item, index) => {
          if (data.length === index + 1) {
            return (
              <div
                ref={lastItemRef}
                key={item.id}
                style={{ padding: "10px", borderBottom: "1px solid #e8e8e8" }}
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            );
          } else {
            return (
              <div
                key={item.id}
                style={{ padding: "10px", borderBottom: "1px solid #e8e8e8" }}
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            );
          }
        })}
        {loading && <p>Loading more items...</p>}
        {!hasMore && <p>You have reached the end of the list.</p>}
      </div>
    </div>
  );
}

export default PaginatedFetch;
