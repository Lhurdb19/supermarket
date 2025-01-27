import React from "react";
import { useRecentViews } from "./recentViewContext";

const RecentViews = () => {
  const { recentViews } = useRecentViews();

  return (
    <div>
      <h2>Recently Viewed</h2>
      {recentViews.length > 0 ? (
        <ul>
          {recentViews.map((item) => (
            <li key={item.id}>
                <img src={item.image} alt="" />
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items viewed recently.</p>
      )}
    </div>
  );
};

export default RecentViews;
