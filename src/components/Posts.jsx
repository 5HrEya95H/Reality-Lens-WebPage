import React from "react";

const Posts = ({ image, className = "" }) => {
  return (
    <div className={className}>
      <div
        className="
          w-[25vw]
          max-w-[320px]
          min-w-[180px]
          border
          border-cyan-800
          rounded-lg
          overflow-hidden
        "
      >
        <img
          src={image}
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Posts;