import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  //console.log(news);
  return (
    <div>
      <div></div>
      {/* NewsList  */}
    </div>
  );
}

export default Homepage;
