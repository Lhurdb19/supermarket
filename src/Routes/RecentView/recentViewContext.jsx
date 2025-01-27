import React, { createContext, useContext, useState } from "react";

// Create the context
const RecentViewsContext = createContext();

// Context provider component
export const RecentViewsProvider = ({ children }) => {
  const [recentViews, setRecentViews] = useState([]);

  // Function to add an item to recent views
  const addToRecentViews = (item) => {
    setRecentViews((prev) => {
      // Avoid duplicates by filtering out the item if it's already in the list
      const updatedViews = prev.filter((view) => view.id !== item.id);
      return [item, ...updatedViews].slice(0, 10); // Limit to 10 items
    });
  };

  return (
    <RecentViewsContext.Provider value={{ recentViews, addToRecentViews }}>
      {children}
    </RecentViewsContext.Provider>
  );
};

// Custom hook for easy access to the context
export const useRecentViews = () => {
  return useContext(RecentViewsContext);
};
