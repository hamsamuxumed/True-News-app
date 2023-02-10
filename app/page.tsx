import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <div>
        {/* NewsList  */}
        <NewsList news={news} />
      </div>
    </div>
  );
}

export default Homepage;
