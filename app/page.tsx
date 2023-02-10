import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

async function Homepage() {
  const news: NewsResponse =
    response || (await fetchNews(categories.join(",")));

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
