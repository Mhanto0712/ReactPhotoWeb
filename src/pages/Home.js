import React, { useState, useEffect } from "react";
import Search from "../component/Search.js";
import Picture from "../component/Picture.js";
import axios from "axios";

const Home = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [currentPage, setcurrentPage] = useState("");

  const auth = process.env.REACT_APP_SECRET;
  const initialPage = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchPage = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  const showData = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setcurrentPage(input);
  };
  const morePage = async () => {
    let newUrl;
    setPage(page + 1);
    if (currentPage === "") {
      newUrl = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newUrl = `https://api.pexels.com/v1/search?query=${currentPage}&page=${
        page + 1
      }&per_page=15`;
    }
    let result = await axios.get(newUrl, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(
    () => {
      showData(initialPage);
    }, // eslint-disable-next-line
    []
  );

  return (
    <div>
      <Search
        showData={() => {
          showData(searchPage);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button
          onClick={morePage}
          style={{ fontWeight: "bolder", borderRadius: "0.5rem" }}
        >
          更多圖片
        </button>
      </div>
    </div>
  );
};

export default Home;
