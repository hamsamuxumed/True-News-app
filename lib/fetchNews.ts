import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // graphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          description
          country
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // fetch function with NEXT 13
  const res = await fetch(
    "https://cachoeira.stepzen.net/api/youthful-echidna/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
      headers: {
        "content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log("WE ARE GETTING NEW DATA", category, keywords);

  const newsResponse = await res.json();
  // sort images and non images
  const newsData = sortNewsByImage(newsResponse.data.myQuery);
  // return newsData
  return newsData;
};

export default fetchNews;

//stepzen import curl "http://api.mediastack.com/v1/news?access_key=a57171f77629dc0fd80c62bfd14d9838&sources=business,sports"
