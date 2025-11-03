import { useState, useEffect, useCallback, useRef } from "react";

// Example of how to generate mock data
const generateMockData = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}.`,
  }));
};

const MOCK_BIG_DATA = generateMockData(200); // 200 items for demonstration

const usePaginatedFetch = (initialStart = 0, initialPageItems = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [start, setStart] = useState(initialStart);
  const [pageItems, setPageItems] = useState(initialPageItems);

  // Ref to keep track of the current scroll position for "infinite scrolling" logic
  const observer = useRef();

  const fetchData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const endIndex = start + pageItems;
    const newData = MOCK_BIG_DATA.slice(start, endIndex);

    if (newData.length === 0) {
      setHasMore(false);
    } else {
      setData((prevData) => [...prevData, ...newData]);
      setStart(endIndex);
    }
    setLoading(false);
  }, [start, pageItems, loading, hasMore]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Initial fetch when the component mounts

  // Function to handle the intersection observer for infinite scrolling
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, fetchData]
  );

  return {
    data,
    loading,
    hasMore,
    lastItemRef,
    setPageItems,
    setStart,
    fetchData,
  };
};

export default usePaginatedFetch;
