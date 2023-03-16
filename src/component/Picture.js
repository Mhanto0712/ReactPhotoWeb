import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <a
        href={data.src.large}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "rgb(255, 119, 142)",
          fontWeight: "bolder",
        }}
      >
        下載圖片
      </a>
    </div>
  );
};

export default Picture;
